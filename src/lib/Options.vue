<template >
  <div class="Jv-ui-container" v-if="visible">
    <div class="Jv-ui-arrow"></div>
    <div class="Jv-ui-select-dropdown">
      <ul class="Jv-ui-options" @scroll="ListScroll" id="ulDom">
        <li
          class="Jv-ui-select-item"
          v-for="item in optionData"
          :key="item.key"
          @mousedown="choose($event)"
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
</template>

<script lang="ts">
import { defineEmits, onUpdated, ref } from "vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    optionData: {
      type: Object,
    },
  },
  setup(props, context) {
    const emit = defineEmits(["emitData"]);
    let emitItem = ref(props.optionData[0].label);
    let moveTop = ref(null);
    let choose = function ($event) {
      if ($event.target.className == "Jv-ui-select-item disabled") {
        return;
      } else {
        emitItem.value = $event.target.innerText;
        context.emit("emitData", emitItem.value);
      }
    };

    onUpdated(() => {
      if (props.visible) {
        //显示下拉框时设置scrollTop的数值
        let dom = document.querySelector("#ulDom");
        dom.scrollTop = moveTop.value;
      } else {
        return;
      }
    });
    let ListScroll = (e) => {
      //记录最后滚动高
      moveTop.value = e.target.scrollTop;
    };
    return { choose, emit, emitItem, moveTop, ListScroll };
  },
};
</script>

<style lang="scss">
.Jv-ui-container {
  position: absolute;
  z-index: 90;
  left: 11px;
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
  position: relative;
  width: 218px;
  height: 210px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: white;
  .Jv-ui-options {
    position: absolute;
    width: 234px;
    height: 218px;
    color: #607996;
    border-radius: 4px;
    overflow: scroll;
    top: 5px;
    .Jv-ui-select-item {
      height: 40px;
      padding: 9px 20px;
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
  background-color: white !important;
}
</style>
