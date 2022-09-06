<template>
  <div :title="title" class="Jv-ui-Tab">
    <slot></slot>
  </div>
</template>


<script lang="ts">
export default {
  name: "JvUiTab",
};
</script>
<style lang="scss">
.Jv-ui-Tab {
  width: 100px;
}
</style>
