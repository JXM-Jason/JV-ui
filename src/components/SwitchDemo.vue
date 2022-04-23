<template>
  <div>
    //采用v-model的方式进行参数的改变
    <Switch v-model:value="bool" />
    //采用@update:value="bool = $event" 的方式
    <Switch :value="bool" @update:value="bool = $event" />
    //添加disabled来禁用组件,在子组件上使用v-bind="$attr",使其根对象继承父组件的非prop的Attributed
    <Switch v-model:value="defaultValue" disabled />
    //添加size属性,输入数字进行控制大小
    <Switch v-model:value="bool" size="0.8" />
    <!-- //添加color来改变颜色 -->
    <!-- <Switch v-model:value="bool" color="red" /> -->
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    const defaultValue = ref(true);
    return { bool, defaultValue };
  },
};
</script>
<style lang="scss" scoped></style>
