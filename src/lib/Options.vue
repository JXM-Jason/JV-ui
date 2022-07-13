<template>
  <!-- v-if="visible" -->
  <template v-if="visible">
    <teleport to="body">
      <div
        class="Jv-ui-container"
        :style="{ left: left + 11 + 'px', top: top + 'px' }"
      >
        <div class="Jv-ui-arrow"></div>
        <div class="Jv-ui-select-dropdown">
          <ul class="Jv-ui-options">
            <li
              class="Jv-ui-select-item"
              v-for="item in optionData"
              :key="item.key"
              @mousedown="choose"
              :class="{
                select: emitItem == item.label ? true : false,
                disabled: item.disabled,
              }"
            >
              {{ item.label }}
            </li>
          </ul>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import { defineEmits, ref } from "vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    optionData: {
      type: Object,
    },
    left: {
      //动态获取下拉框位置
      type: Number,
    },
    top: {
      //动态获取下拉框位置
      type: Number,
    },
  },
  setup(props, context) {
    const emit = defineEmits(["emitData"]);
    let emitItem = ref(props.optionData[0].label);
    console.log("props.optionData", props.optionData);

    let choose = (e) => {
      console.log("e---e", e);

      if (e.target.className == "Jv-ui-select-item disabled") {
        return;
      } else {
        emitItem.value = e.target.innerText;
        context.emit("emitData", emitItem.value);
      }
    };

    return { choose, emit, emitItem };
  },
};
</script>

<style lang="scss">
.Jv-ui-container {
  position: absolute;
}
.Jv-ui-arrow {
  border-top: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #f2f3f6;
  height: 0px;
  width: 0px;
  position: relative;
  left: 10px;
}
.Jv-ui-select-dropdown {
  width: 218px;
  height: 210px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: white;
  .Jv-ui-options {
    width: 234px;
    height: 218px;
    color: #607996;
    border-radius: 4px;
    overflow: scroll;
    margin-top: 10px;
    // border: 1px solid pink;
    .Jv-ui-select-item {
      padding: 9px 20px;
      // padding: 9px 20px 9px 20px;
      // border: 1px solid blue;
    }

    .isChoose {
      font-weight: bold;
      color: #409eff;
    }
    .Jv-ui-select-item:hover {
      background-color: #f5f7fa;
      cursor: pointer;
    }
  }
}
.select {
  background-color: #f5f7fa;
  color: #409eff;
  font-weight: bold;
}
.disabled {
  color: #c0c4cc;
  cursor: not-allowed !important;
  // background-color: white !important;
}
</style>
