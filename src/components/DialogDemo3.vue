<demo>
一句话打开Dialog
</demo>

<template>
  <Button themes="info" @click="showDialog">点击弹窗</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import { h } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    let showDialog = () => {
      openDialog({
        title: h("strong", "警醒"),
        content: h("div", "像海绵一样，保持对外界事物的包容性持续学习"),
        OK: () => {
          return true;
        },
        Cancel: () => {},
      });
    };

    return { showDialog };
  },
};
</script>
<style lang="scss" scoped>
button {
  margin-right: 14px;
  margin-bottom: 10px;
}
</style>