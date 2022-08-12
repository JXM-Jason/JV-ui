<template>
  <Transition>
    <template v-if="visible">
      <div tabindex="-1" class="Jv-ui-Drawer-wrapper">
        <div
          role="document"
          tabindex="-1"
          class="Jv-ui-Drawer-container"
          @click.self="Close"
        >
          <div
            aria-modal="true"
            style="width: 30%"
            class="Jv-ui-Drawer"
            :class="{
              right: direction == 'right',
              left: direction == 'left',
              top: direction == 'top',
              bottom: direction == 'bottom',
            }"
          >
            <header class="Jv-ui-Drawer-header">
              <slot name="header"> <span>我是头部</span></slot>
              <span class="Jv-ui-Drawer-close" @click="Close"></span>
            </header>
            <section class="Jv-ui-Drawer-body">
              <slot name="body"> <span>我是身体</span></slot>
            </section>
          </div>
        </div>
      </div>
    </template>
  </Transition>
</template>

<script lang="ts">
import { openDialog } from "../lib/openDialog";
import { h } from "vue";
export default {
  props: {
    direction: {
      type: String,
      default: "right",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    let Close = () => {
      openDialog({
        title: h("strong", "确认关闭"),
        content: h("div", "你确定要关闭当前窗口？"),
        OK: () => {
          context.emit("update:visible", !props.visible);
          return true;
        },
        Cancel: () => {},
      });
    };
    return { Close };
  },
};
</script>


<style lang="scss">
.Jv-ui-Drawer {
  &-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    margin: 0;
    z-index: 9;
    display: var(--display);
  }
  &-container {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.5);
  }
  &-header {
    align-items: center;
    color: #72767b;
    display: flex;
    margin-bottom: 32px;
    padding: 20px 20px 0;
    > :first-child {
      flex: 1;
    }
  }
  &-close {
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: #898c90;
      width: 6%;
      top: 4.2%;
      left: 90.3%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
  &-body {
    padding: 20px;
    flex: 1;
    overflow: auto;
  }
  position: absolute;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 10px -5px rgb(0 0 0 / 20%), 0 16px 24px 2px rgb(0 0 0 / 14%),
    0 6px 30px 5px rgb(0 0 0 / 12%);
  overflow: hidden;
  outline: 0;
  &.right {
    right: 0;
    height: 100%;
    top: 0;
    bottom: 0;
  }
  @keyframes move-right1 {
    0% {
      right: -288px;
    }
    100% {
      right: 0px;
    }
  }
  @keyframes move-right2 {
    0% {
      right: 0px;
    }
    100% {
      right: -288px;
    }
  }
}

.v-enter-active {
  animation: move-right1 0.3s ease;
}
.v-leave-active {
  animation: move-right2 0.3s ease;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>