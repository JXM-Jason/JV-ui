<template>
  <div class="Jv-ui-Message">
    <Button>点击打开消息width</Button>
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
