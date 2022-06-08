<template>
  <div class="Jv-ui-Tabs">
    <div class="Jv-ui-activeBar" ref="indicator"></div>
    <div
      class="Jv-ui-Nav"
      v-for="(item, index) in TabArray"
      :key="item.props.name"
      :class="{ selected: item.props.name === selected }"
      @click="handleClick"
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
import { computed, onMounted, ref } from "vue";
export default {
  props: {
    selected: {
      type: String,
      default: "first",
    },
  },

  setup(props, context) {
    const TabArray = context.slots.default();
    const NavItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>();
    TabArray.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs组件的子组件必须是Tab!");
      }
    });
    const handleClick = (e) => {
      context.emit("update:selected", e.target.__vnode.key);
    };
    const TabFilter = computed(() => {
      //过滤出符合当前选中状态的插槽内容
      return TabArray.filter((item) => {
        return item.props.name === props.selected;
      });
    });

    onMounted(() => {
      const divs = NavItems.value;
      const result = divs.filter((item) => {
        //得到有选中样式的div,之后将其宽度赋值给指示条
        return item.className === "Jv-ui-Nav selected";
      })[0];
      indicator.value.style.width = result.getBoundingClientRect().width + "px";
    });
    return { TabArray, handleClick, TabFilter, NavItems, indicator };
  },
};
</script>

<style lang="scss">
.Jv-ui-Tabs {
  margin-top: 10px;
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
  }
  .selected {
    color: #409eff;
  }
}
.Jv-ui-TabContent {
  // border: 1px solid yellow;
  margin-top: 10px;
  height: 50px;
  display: flex;
}
</style>