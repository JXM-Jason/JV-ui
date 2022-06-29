<template>
  <input
    type="text"
    readonly="true"
    autocomplete="off"
    class="Jv-ui-form-control"
    :placeholder="placeholder"
    @click="showOptions"
  />
  <span class="Jv-ui-arrow-reverse"></span>
  <slot v-if="value"></slot>
</template>

<script lang="ts">
import Options from "../lib/Options.vue";
export default {
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Options,
  },
  setup(props, context) {
    let showOptions = () => {
      console.log("props.value", props.value);

      context.emit("update:value", !props.value);
    };
    return { showOptions };
  },
};
</script>

<style lang="scss">
.Jv-ui-form-control {
  position: relative;
  border: 1px solid #c0c4cc;
  width: 240px;
  height: 40px;
  padding: 0px 30px 0px 10px !important;
  text-align: left;
  line-height: 38px;
  color: #c0c4cc;
  border-radius: 4px;
}
.Jv-ui-form-control:hover {
  cursor: pointer;
}
.Jv-ui-arrow-reverse {
  border: 1px solid #c0c4cc;
  display: inline-block;
  position: absolute;
  left: 430px;
  top: 195px;
  width: 8px;
  height: 8px;
  border-right: none;
  border-bottom: none;
  transform: rotate(-135deg);
}
input[type="text"]:focus,
select:focus {
  border: 1px solid #4988e7;
  outline: none;
}

.Jv-ui-select-dropdown {
  // height: 230px;
  transition: height 200ms;
}
.isActive .Jv-ui-select-dropdown {
  height: 0px;
  border: none;
}
.isActive .Jv-ui-arrow {
  border-width: 10px;
  // display: none;
  border-color: transparent;
  border: none;
}
</style>
