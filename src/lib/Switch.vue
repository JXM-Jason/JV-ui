<template>
  <button
    @click="toggle"
    :class="{ checked: value }"
    v-bind="$attr"
    :style="`transform: scale(${size}) `"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
import { onBeforeUpdate } from "vue";
// import { ref } from "vue";

export default {
  props: ["value", "size", "color"],
  data() {
    return {
      Attr: this.$attr,
      Size: this.size,
    };
  },
  setup(props, context) {
    // const checked = ref(false)
    // let toggle = () => {
    //   checked.value = !checked.value
    // }
    let colorChange = "";
    let toggle = (e) => {
      context.emit("update:value", !props.value);
      console.log(e.target);
      console.log("props");
      console.log(props.color);
      console.log("context.attrs");
      console.log(context.attrs);
    };

    return {
      // checked,
      toggle,
    };
  },
};
</script>

<style lang="scss" scoped>
$h: 23px;
$h2: $h - 3px;
button {
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
.checked {
  background-color: #2d8cf0;
}
.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
button:disabled {
  cursor: not-allowed;
}
</style>
