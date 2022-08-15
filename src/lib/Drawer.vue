<template>
  <Transition>
    <template v-if="visible">
      <div tabindex="-1" class="Jv-ui-Drawer-wrapper">
        <div
          role="document"
          tabindex="-1"
          class="Jv-ui-Drawer-container"
          @click.self="beforeClose ? beforeClose() : Close()"
        >
          <div
            aria-modal="true"
            :style="getStyle(direction)"
            class="Jv-ui-Drawer"
            :class="{
              right: direction == 'right',
              left: direction == 'left',
              top: direction == 'top',
              bottom: direction == 'bottom',
            }"
          >
            <header class="Jv-ui-Drawer-header" v-show="withHeader">
              <slot name="header"> <span>我是头部</span></slot>
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
    withHeader: {
      type: Boolean,
      default: true,
    },
    beforeClose: {
      type: Function,
    },
  },
  setup(props, context) {
    let Close = () => {
      context.emit("update:visible", !props.visible);
    };
    let getStyle = (position) => {
      switch (position) {
        case "right":
          return { width: "30%" };
          break;
        case "left":
          return { width: "30%" };
          break;
        case "top":
          return { width: "100%", height: "30%" };
          break;
        case "bottom":
          return { width: "100%", height: "30%" };
      }
    };
    return { Close, getStyle };
  },
};
</script>


<style lang="scss" >
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
  &.left {
    left: 0;
    height: 100%;
    top: 0;
    bottom: 0;
  }
  &.top {
    left: 0;
  }
  &.bottom {
    left: 0;
    bottom: 0;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>