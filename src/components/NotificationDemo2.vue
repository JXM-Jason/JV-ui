<demo>
设置关闭时间
</demo>

<template>
  <Button themes="danger" @click="open">2 秒后自动关闭</Button>
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
    let open = () => {
      openMessage({
        title: h("strong", "标题1"),
        message: h("div", "在这里填充文案1!"),
        duration: 2000,
      });
    };
    return { open };
  },
};
</script>