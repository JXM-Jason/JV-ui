<demo>
常规用法
</demo>

<template>
  <Button themes="main" @click="open">默认配置</Button>
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
        title: h("strong", "标题名称"),
        message: h("div", "这是文案提示，这是文案提示！"),
      });
    };
    return { open };
  },
};
</script>