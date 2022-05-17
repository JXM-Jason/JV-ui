<template>
  <template v-if="visible">
    <div class="Jv-ui-dialog-overlay"></div>
    <div class="Jv-ui-dialog-wrapper">
      <div class="Jv-ui-dialog">
        <header>标题 <span class="Jv-ui-dialog-close"></span></header>
        <main>
          <p>第一行字</p>
          <p>第二行字</p>
        </main>
        <footer>
          <Button themes="main">确认</Button>
          <Button>取消</Button>
        </footer>
      </div>
    </div>
  </template>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.Jv-ui-dialog {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 24em;
  max-width: 90%;
  background: white;
  box-shadow: 0 0 10px fade_out(black, 0.5);
  border-radius: 4px;
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-close {
    border: 1px solid blue;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 40%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
  > header {
    border-bottom: 1px solid #d9d9d9;
    padding: 20px 20px 10px;
    font-size: 20px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
  }
  > main {
    font-size: 14px;
    color: #606266;
    padding: 30px 20px;
  }
  > footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
    > button {
      position: relative;
      top: 5px;
    }
  }
}
</style>


