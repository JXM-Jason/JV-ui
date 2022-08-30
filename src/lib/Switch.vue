<template>
  <button
    class="Jv-ui"
    @click="toggle()"
    :class="{ 'Jv-ui-checked': value }"
    v-bind="$attrs"
    :style="`transform:scale(${size});--color:${color ? color : '#2d8cf0'}`"
  >
    <span></span>
    <!-- :style="[`transform: scale(${size});`, calColor]" -->
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: ["value", "size", "color"],
  setup(props, context) {
    let toggle = () => {
      context.emit("update:value", !props.value);
    };
    const calColor = computed(() => {
      return props.color && props.value ? { backgroundColor: props.color } : {};
    });
    return {
      toggle,
      calColor,
    };
  },
};
</script>

<style lang="scss">
$h: 23px;
$h2: $h - 5px;
$color: #2d8cf0;
.Jv-ui {
  position: relative;
  width: $h * 2;
  height: $h;
  border: none;
  border-radius: calc($h/2);
  display: flex;
  align-items: center;
  background-color: #cccccc;
  margin-left: 20px;
  text-align: center;
  > span {
    position: absolute;
    width: $h2;
    height: $h2;
    left: 3px;
    background-color: #ffffff;
    border-radius: calc($h2/2);
    transition: left 250ms;
  }
}
.Jv-ui-checked {
  background-color: var(--color);
  // background-color: $color;
}
.Jv-ui-checked > span {
  left: calc(100% - #{$h2} - 2px);
}
.Jv-ui:disabled {
  cursor: not-allowed;
}
</style>
