<template>
  <div>
    <Tabs v-model:selected="TabFlag1">
      <Tab title="导航1" name="first">内容1</Tab>
      <Tab title="导航2" name="second">内容2</Tab>
      <Tab title="导航3" name="third">内容3</Tab>
    </Tabs>
  </div>
  <div>
    <Tabs v-model:selected="TabFlag2">
      <Tab title="导航1" name="first">内容1</Tab>
      <Tab title="导航2" name="second">内容2</Tab>
      <Tab title="导航3" name="third" disabled="disabled">内容3</Tab>
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
    let TabFlag1 = ref("first");
    let TabFlag2 = ref("first");
    return { TabFlag1, TabFlag2 };
  },
};
</script>

<style lang="scss">
</style>
