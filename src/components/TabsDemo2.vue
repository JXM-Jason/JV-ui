<demo>
支持disabled
</demo>

<template>
  <Tabs v-model:selected="TabFlag2">
    <Tab title="导航1" name="first">内容1</Tab>
    <Tab title="导航2" name="second">内容2</Tab>
    <Tab title="导航3" name="third" disabled="disabled">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
import { ref } from "vue";
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
export default {
  components: {
    Tab,
    Tabs,
  },
  setup() {
    let TabFlag2 = ref("first");
    return { TabFlag2 };
  },
};
</script>