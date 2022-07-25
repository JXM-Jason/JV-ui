<template>
  <div>
    <h3>示例一</h3>
    //设置标题、内容还有字体颜色样式
    <br />
    <Button @click="open">可自动关闭</Button>
  </div>
  <div>
    <h3>示例二</h3>
    //设置标题、内容还有关闭时间2秒
    <br />
    <Button @click="open1">打开消息</Button>
  </div>
  <div>
    <h3>示例三</h3>
    //未进行内容设置,不关闭
    <br />
    <Button @click="open2">不自动关闭</Button>
  </div>
  <div>
    <h3>示例四</h3>
    //未进行内容设置,不关闭,修改出现位置
    <br />
    <Button @click="open3">左上角</Button>
    <Button @click="open4">左下角</Button>
    <Button @click="open5">右上角</Button>
    <Button @click="open6">右下角</Button>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";
import { openMessage } from "../lib/openNotification";
import { h } from "vue";
export default {
  components: {
    Button,
  },
  setup() {
    let open = () => {
      openMessage({
        title: h("strong", "标题名称"),
        message: h(
          "div",
          { style: "color : red" },
          "这是文案提示，这是文案提示！"
        ),
      });
    };
    let open1 = () => {
      openMessage({
        title: h("strong", "标题1"),
        message: h("div", "在这里填充文案1!"),
        duration: 2000,
      });
    };
    let open2 = () => {
      openMessage({
        duration: 0,
      });
    };
    let open3 = () => {
      openMessage({
        message: h("div", "我在左上角出现!"),
        duration: 0,
        position: "top-left",
      });
    };
    let open4 = () => {
      openMessage({
        message: h("div", "我在左下角出现!"),
        duration: 0,
        position: "bottom-left",
      });
    };
    let open5 = () => {
      openMessage({
        message: h("div", "我在右上角出现!"),
        duration: 0,
        position: "top-right",
      });
    };
    let open6 = () => {
      openMessage({
        message: h("div", "我在右下角出现!"),
        duration: 0,
        position: "bottom-right",
      });
    };
    return { open, open1, open2, open3, open4, open5, open6 };
  },
};
</script>

<style lang="scss">
</style>

