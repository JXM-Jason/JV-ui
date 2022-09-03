<demo>
支持圆角边框
</demo>

<template>
  <Button :round="40"> 默认按钮</Button>
  <Button themes="main" :round="40"> 主要按钮</Button>
  <Button themes="danger" :round="40"> 危险按钮</Button>
  <Button themes="success" :round="40"> 成功按钮</Button>
  <Button themes="info" :round="40"> 信息按钮</Button>
  <Button themes="warning" :round="40"> 警告按钮</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
<style lang="scss" scoped>
button {
  margin-right: 14px;
  margin-bottom: 10px;
}
</style>