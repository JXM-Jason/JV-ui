<template>
  <div class="Jv-ui-Tabs" ref="container">
    <div class="Jv-ui-activeBar" ref="indicator"></div>
    <div
      class="Jv-ui-Nav"
      v-for="(item, index) in TabArray"
      :key="item.props.name"
      :class="{
        selected: item.props.name === selected,
        disabled: item.props.disabled,
      }"
      @click="handleClick(item)"
      :ref="
        (el) => {
          if (el) NavItems[index] = el;
        }
      "
    >
      {{ item.props.title }}
    </div>
  </div>
  <div class="Jv-ui-TabContent">
    <component v-for="c in TabFilter" :key="c.props.name" :is="c" />
  </div>
</template>

<script lang="ts">
import Tab from "../lib/Tab.vue";
import { computed, onMounted, onUpdated, ref } from "vue";
export default {
  props: {
    selected: {
      type: String,
      default: "first",
    },
  },

  setup(props, context) {
    let TabArray = context.slots.default();
    const NavItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>();
    const container = ref<HTMLDivElement>();
    TabArray.forEach((tag) => {
      // @ts-ignore
      if (tag.type.name !== Tab.name) {
        throw new Error("Tabs组件的子组件必须是Tab!");
      }
    });
    const handleClick = (item) => {
      if (item.props.disabled == "disabled") {
        return;
      } else {
        context.emit("update:selected", item.props.name);
      }
    };
    const TabFilter = computed(() => {
      //过滤出符合当前选中状态的插槽内容
      return TabArray.filter((item) => {
        return item.props.name === props.selected;
      });
    });
    const changeStyle = () => {
      const divs = NavItems.value;
      const result = divs.filter((item) => {
        //得到有选中样式的div,之后将其宽度赋值给指示条
        return item.className === "Jv-ui-Nav selected";
      })[0];

      indicator.value.style.width = result.getBoundingClientRect().width + "px";
      let { left: left1 } = result.getBoundingClientRect(); //获取导航栏的left值
      let { left: left2 } = container.value.getBoundingClientRect(); //获取导航栏外层container的left值
      let left = left1 - left2 + "px"; //得到差值
      indicator.value.style.left = left; //将差值传给指示条
    };
    onMounted(() => {
      changeStyle();
    });
    onUpdated(() => {
      changeStyle();
    });
    return { TabArray, handleClick, TabFilter, NavItems, indicator, container };
  },
};
</script>

<style lang="scss">
.Jv-ui-Tabs {
  border-bottom: 1px solid #e4e7ed;
  display: flex;
  position: relative;
  > div {
    margin-right: 10px;
    height: 40px;
    line-height: 40px;
    padding: 0px 10px;
  }
  .Jv-ui-activeBar {
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 2px;
    background-color: #409eff;
    border: 1px solid #409eff;
    transition: all 250ms;
  }
  .selected {
    color: #409eff;
  }
  .disabled {
    cursor: not-allowed;
    color: #d6cccc;
  }
}
.Jv-ui-TabContent {
  margin-top: 10px;
  height: 50px;
  display: flex;
}
</style>