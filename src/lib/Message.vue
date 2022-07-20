<template>
  <div class="Jv-ui-Message">
    <Button>打开消息</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
<style lang="scss">
.Jv-ui-Message {
  width: 1000px;
  height: 500px;
  border: 1px solid red;
}
</style>
