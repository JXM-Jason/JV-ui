<demo>
常规用法
</demo>

<template>
  <Button :Loading="true"> 默认按钮</Button>
  <Button themes="main" :Loading="true"> 主要按钮</Button>
  <Button themes="danger" :Loading="true"> 危险按钮</Button>
  <Button themes="success" :Loading="true"> 成功按钮</Button>
  <Button themes="info" :Loading="true"> 信息按钮</Button>
  <Button themes="warning" :Loading="true"> 警告按钮</Button>
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