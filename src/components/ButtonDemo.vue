<template>
  <div>
    button组件
    <div>
      <h3>示例一</h3>
      <p>默认常规按钮</p>
      <Button> 默认按钮</Button>
    </div>
    <div>
      <h3>示例二</h3>
      <p>传入themes主题为danger的按钮</p>
      <Button themes="danger"> 危险按钮</Button>
    </div>
    <div>
      <h3>示例三</h3>
      <p>传入themes主题为success的按钮</p>
      <Button themes="success"> 成功按钮</Button>
    </div>
    <div>
      <h3>示例四</h3>
      <p>传入disabled属性的按钮</p>
      <Button disabled> 禁止按钮</Button>
    </div>
    <div>
      <h3>示例五</h3>
      <p>传入round圆角边框的按钮</p>
      <Button :round="40"> 圆角按钮</Button>
    </div>
    <div>
      <h3>示例六</h3>
      <p>传入loading的按钮</p>
      <Button :Loading="true">loading加载中</Button>
    </div>
  </div>
</template>


<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>

<style>
</style>

