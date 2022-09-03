<demo>
支持disabled
</demo>

<template>
  <Button disabled> 默认按钮</Button>
  <Button themes="main" disabled> 主要按钮</Button>
  <Button themes="danger" disabled> 危险按钮</Button>
  <Button themes="success" disabled> 成功按钮</Button>
  <Button themes="info" disabled> 信息按钮</Button>
  <Button themes="warning" disabled> 警告按钮</Button>
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