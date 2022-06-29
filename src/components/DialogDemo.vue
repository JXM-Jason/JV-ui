<template>
  <div>
    <h3>对话框示例一</h3>
    //直接在组件内填充相关内容
    <Button @click="toggle">点击弹窗</Button>

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
  </div>
  <div>
    <h3>对话框示例二</h3>
    //一句话打开Dialog
    <Button @click="showDialog">点击弹窗</Button>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import { h, ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    let x = ref(false);
    let toggle = () => {
      x.value = !x.value;
    };
    let f1 = () => {
      console.log("f1");
      return true;
    };
    let f2 = () => {
      console.log("f2");
    };

    let showDialog = () => {
      openDialog({
        title: h("strong", "警醒"),
        content: h("div", "像海绵一样，保持对外界事物的包容性持续学习"),
        OK: () => {
          console.log("确认");
          return false;
        },
        Cancel: () => {
          console.log("取消");
        },
      });
    };

    return { x, toggle, f1, f2, showDialog };
  },
};
</script>

<style lang="scss" >
</style>