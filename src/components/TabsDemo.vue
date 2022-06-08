<template>
  <div>
    <Tabs v-model:selected="TabFlag">
      <Tab title="导航1" name="first">内容1</Tab>
      <Tab title="导航2" name="second">内容2</Tab>
      <Tab title="导航3" name="third">内容3</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    let TabFlag = ref("first");
    return { TabFlag };
  },
};
</script>

<style lang="scss">
</style>
