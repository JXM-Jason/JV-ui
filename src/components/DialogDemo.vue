<template>
  <div>
    <Button @click="toggle">点击弹窗</Button>
  </div>
  <div>
    <h3>对话框示例一</h3>
    <Dialog :visible="x" @update:value="x = $event" :closeOnClickOverlay="false" :OK="f1" :Cancel="f2"  />
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
    let f1 = () => {
      console.log("f1");
      return false;
    };
    let f2 = () => {
      console.log("f2");
    };
    return { x, toggle, f1, f2 };
  },
};
</script>

<style lang="scss" >
</style>

