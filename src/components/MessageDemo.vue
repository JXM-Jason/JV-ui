<template>
  <div>
    <Button @click="showMessage">打开消息</Button>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
  },
  setup() {
    let bool = ref(false);
    let showMessage = () => {
      console.log("点击了");
      bool.value = true;
    };
    return { showMessage, bool };
  },
};
</script>

<style lang="scss">
</style>

