<template>
  <template v-if="visible">
    <teleport to="body">
      <div
        role="alert"
        class="Jv-ui-Notification"
        style="top: 16px"
        v-bind="$attrs"
      >
        <div class="Jv-ui-Notification-group">
          <slot name="title">
            <h2 class="Jv-ui-Notification-title">提示</h2>
          </slot>
          <slot name="message">
            <div class="Jv-ui-Notification-content">
              <p>Notification</p>
            </div>
          </slot>
          <div class="Jv-ui-Notification-close" @click="Close"></div>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    let Close = () => {
      context.emit("update:value", !props.visible);
    };
    return { Close };
  },
};
</script>
<style lang="scss">
.Jv-ui-Notification {
  display: flex;
  flex-direction: column;
  width: 330px;
  padding: 14px 26px 14px 13px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  position: fixed;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  overflow: hidden;
  z-index: 90;
  &.right {
    right: 16px;
    animation: move-right 0.3s ease-out;
  }
  &.left {
    left: 16px;
    animation: move-left 0.3s ease-out;
  }
  @keyframes move-right {
    0% {
      transform: translateX(105%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @keyframes move-left {
    0% {
      transform: translateX(-105%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  &-group {
    margin-left: 13px;
    margin-right: 8px;
  }
  &-title {
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
    overflow: hidden;
  }
  &-close {
    position: absolute;
    top: 15px;
    left: 300px;
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
