<demo>
常规用法
</demo>

<template>
  <Button> 默认按钮</Button>
  <Button themes="main"> 主要按钮</Button>
  <Button themes="danger"> 危险按钮</Button>
  <Button themes="success"> 成功按钮</Button>
  <Button themes="info"> 信息按钮</Button>
  <Button themes="warning"> 警告按钮</Button>
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