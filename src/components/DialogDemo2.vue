<demo>
禁用遮罩层关闭
</demo>

<template>
  <Button themes="warning" @click="toggle">点击弹窗</Button>
  <Dialog
    :visible="x"
    @update:value="x = $event"
    :closeOnClickOverlay="false"
    :OK="f1"
    :Cancel="f2"
  >
    <template v-slot:title>
      <strong>我是title提示</strong>
    </template>
    <template v-slot:content>
      <div>我是内容content</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    let x = ref(false);
    let toggle = () => {
      x.value = !x.value;
    };
    let f1 = () => {
      return true;
    };
    let f2 = () => {};

    return { x, toggle, f1, f2 };
  },
};
</script>
<style lang="scss" scoped>
button {
  margin-right: 14px;
  margin-bottom: 10px;
}
</style>