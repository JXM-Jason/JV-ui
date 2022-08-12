
<template>
  <div>抽屉</div>
  <Button @click="openDrawer">点击从右打开</Button>
  <Drawer :direction="direction" v-model:visible="drawer"></Drawer>
</template>


<script lang="ts">
import Button from "../lib/Button.vue";
import Drawer from "../lib/Drawer.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
    Drawer,
  },
  setup() {
    let direction = "right";
    let drawer = ref(false);
    let openDrawer = () => {
      drawer.value = true;
    };
    return { direction, drawer, openDrawer };
  },
};
</script>


<style lang="scss">
</style>