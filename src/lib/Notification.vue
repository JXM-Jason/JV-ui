<template>
  <div role="alert" class="Jv-ui-Notification">
    <div class="Jv-ui-Notification-group">
      <h2 class="Jv-ui-Notification-title">提示</h2>
      <div class="Jv-ui-Notification-content">
        <p>Notification</p>
      </div>
      <div class="Jv-ui-Notification-close"></div>
    </div>
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
.Jv-ui-Notification {
  height: 88px;
  display: flex;
  flex-direction: column;
  width: 330px;
  padding: 14px 26px 14px 13px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  position: fixed;
  background-color: #fff;
  transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s,
    bottom 0.3s;
  overflow: hidden;
  &-group {
    margin-left: 13px;
    margin-right: 8px;
    border: 1px solid yellow;
  }
  &-title {
    border: 1px solid pink;
    font-weight: 700;
    font-size: 16px;
    color: #303133;
    margin: 0;
  }
  &-content {
    font-size: 14px;
    line-height: 21px;
    margin: 6px 0 0;
    color: #606266;
    text-align: justify;
    border: 1px solid blue;
  }
  &-close {
    position: absolute;
    top: 15px;
    left: 300px;
    border: 1px solid red;
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
      top: 50%;
      left: 49.99999%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
