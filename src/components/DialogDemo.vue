<template>
  <div>
    <Button @click="toggle">点击弹窗</Button>
  </div>
  <div>
    <h3>对话框示例一</h3>
    <Dialog :visible="x" />
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    let x = ref(false);
    let toggle = () => {
      x.value = !x.value;
    };
    return { x, toggle };
  },
};
</script>

<style lang="scss" >
</style>

