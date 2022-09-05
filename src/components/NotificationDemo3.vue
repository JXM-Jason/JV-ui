<demo>
自定义弹出位置
</demo>

<template>
  <Button themes="main" @click="open1">左上角</Button>
  <Button themes="danger" @click="open2">左下角</Button>
  <Button themes="success" @click="open3">右上角</Button>
  <Button themes="warning" @click="open4">右下角</Button>
</template>

<script lang="ts">
import { h } from "vue";
import Button from "../lib/Button.vue";
import { openMessage } from "../lib/openNotification";
export default {
  components: {
    Button,
  },
  setup() {
    let open1 = () => {
      openMessage({
        message: h("div", "我在左上角出现!"),
        duration: 2000,
        position: "top-left",
      });
    };
    let open2 = () => {
      openMessage({
        message: h("div", "我在左下角出现!"),
        duration: 2000,
        position: "bottom-left",
      });
    };
    let open3 = () => {
      openMessage({
        message: h("div", "我在右上角出现!"),
        duration: 2000,
        position: "top-right",
      });
    };
    let open4 = () => {
      openMessage({
        message: h("div", "我在右下角出现!"),
        duration: 2000,
        position: "bottom-right",
      });
    };
    return { open1, open2, open3, open4 };
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-right: 14px;
  margin-bottom: 10px;
}
</style>