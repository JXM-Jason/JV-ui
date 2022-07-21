<template>
  <div>
    <Button @click="showNotification">打开消息</Button>
    <Notification></Notification>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";
import Notification from "../lib/Notification.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
    Notification,
  },
  setup() {
    let bool = ref(false);
    let showNotification = () => {
      console.log("点击了");
      bool.value = true;
    };
    return { showNotification, bool };
  },
};
</script>

<style lang="scss">
</style>

