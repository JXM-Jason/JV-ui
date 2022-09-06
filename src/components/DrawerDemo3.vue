<demo>
无header内容
</demo>

<template>
  <Button themes="main" @click="openDrawer1">点击从右打开</Button>
  <Drawer
    :direction="direction1"
    v-model:visible="drawer1"
    :withHeader="header"
  ></Drawer>

  <Button themes="main" @click="openDrawer2">点击从左打开</Button>
  <Drawer
    :direction="direction2"
    v-model:visible="drawer2"
    :withHeader="header"
  ></Drawer>
  <Button themes="main" @click="openDrawer3">点击从上打开</Button>
  <Drawer
    :direction="direction3"
    v-model:visible="drawer3"
    :withHeader="header"
  ></Drawer>
  <Button themes="main" @click="openDrawer4">点击从下打开</Button>
  <Drawer
    :direction="direction4"
    v-model:visible="drawer4"
    :withHeader="header"
  >
    <template v-slot:header> 你！你！你！要跳舞吗？</template>
    <template v-slot:body>wow! I can really dance!</template>
  </Drawer>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Drawer from "../lib/Drawer.vue";
import { ref } from "vue";
export default {
  components: {
    Drawer,
    Button,
  },
  setup() {
    let direction1 = "right";
    let direction2 = "left";
    let direction3 = "top";
    let direction4 = "bottom";

    let drawer1 = ref(false);
    let drawer2 = ref(false);
    let drawer3 = ref(false);
    let drawer4 = ref(false);
    let header = ref(false);

    let openDrawer1 = () => {
      drawer1.value = true;
    };
    let openDrawer2 = () => {
      drawer2.value = true;
    };
    let openDrawer3 = () => {
      drawer3.value = true;
    };
    let openDrawer4 = () => {
      drawer4.value = true;
    };

    return {
      direction1,
      direction2,
      direction3,
      direction4,
      drawer1,
      drawer2,
      drawer3,
      drawer4,
      openDrawer1,
      openDrawer2,
      openDrawer3,
      openDrawer4,
      header,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-right: 14px;
  margin-bottom: 10px;
}
</style>