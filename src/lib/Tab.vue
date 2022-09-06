<template>
  <div :title="title" class="Jv-ui-Tab">
    <slot></slot>
  </div>
</template>


<script lang="ts">
export default {
  name: "JvUiTab",
  props: { title: { type: String }, name: { type: String } },
};
</script>
<style lang="scss">
.Jv-ui-Tab {
  width: 100px;
}
</style>
