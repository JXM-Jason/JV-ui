<template>
  <div class="whole">
    <input
      type="text"
      readonly="true"
      autocomplete="off"
      class="Jv-ui-form-control"
      v-bind="$attrs"
      @click="showOptions"
      @blur="hideOptions"
      :placeholder="selectItem"
    />
    <span class="Jv-ui-arrow-reverse" :class="{ isActive: value }"></span>
    <options
      :optionData="FilterData"
      :visible="value"
      @emitData="changePlaceholder"
    ></options>
  </div>
</template>

<script  lang="ts">
import Options from "../lib/Options.vue";
import { computed, ref } from "vue";
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Options,
  },
  setup(props, context) {
    let FilterData = [];
    let selected = ref(null);
    let showOptions = () => {
      context.emit("update:value", !props.value);
    };
    let hideOptions = () => {
      context.emit("update:value", false);
    };
    let slotsData = context.slots.default()[0].children;
    for (let i = 0; i < slotsData.length; i++) {
      FilterData.push(slotsData[i].props);
    }
    //用于接受子组件传递过来的值
    let changePlaceholder = (data) => {
      selected.value = data;
      return selected.value;
    };

    //计算属性来确定用户选的内容
    let selectItem = computed(() => {
      return selected.value ? selected.value : FilterData[0].label;
    });

    return {
      showOptions,
      hideOptions,
      slotsData,
      FilterData,
      changePlaceholder,
      selectItem,
    };
  },
};
</script>

<style lang="scss">
.whole {
  position: relative;
}
.Jv-ui-form-control {
  position: relative;
  border: 1px solid #c0c4cc;
  width: 240px;
  height: 40px;
  padding: 0px 30px 0px 15px;
  text-align: left;
  line-height: 38px;
  color: #c0c4cc;
  border-radius: 4px;
}
.Jv-ui-form-control:hover {
  cursor: pointer;
}
.Jv-ui-form-control:disabled {
  background-color: #f5f7fa;
  cursor: not-allowed;
}
.Jv-ui-arrow-reverse {
  border: 1px solid #c0c4cc;
  display: inline-block;
  position: absolute;
  left: 220px;
  top: 15px;
  width: 8px;
  height: 8px;
  border-right: none;
  border-bottom: none;
  transform: rotate(-135deg);
  transition: transform 200ms;
}
.isActive.Jv-ui-arrow-reverse {
  transform: rotate(45deg);
  transition: transform 200ms;
}
input[type="text"]:focus,
select:focus {
  border: 1px solid #4988e7;
  outline: none;
}
</style>
