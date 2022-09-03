<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="Jv-ui-dialog-overlay" @click="onClickOverlay"></div>
      <div class="Jv-ui-dialog-wrapper">
        <div class="Jv-ui-dialog">
          <header>
            <slot name="title"></slot>
            <span class="Jv-ui-dialog-close" @click="Close"></span>
          </header>
          <main>
            <slot name="content"></slot>
          </main>
          <footer>
            <div class="Jv-ui-footer">
              <Button themes="main" @click="OK">确&nbsp;&nbsp;认</Button>
              <Button @click="Cancel">取&nbsp;&nbsp;消</Button>
            </div>
          </footer>
        </div>
      </div>
    </teleport>
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
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    Cancel: {
      type: Function,
    },
    OK: {
      type: Function,
    },
  },
  setup(props, context) {
    let Close = () => {
      context.emit("update:value", !props.visible);
    };
    let OK = () => {
      if (props.OK?.() !== false) {
        Close();
      }
    };
    let Cancel = () => {
      props.Cancel?.();
      Close();
    };
    let onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        Close();
      }
    };
    return { Close, Cancel, OK, onClickOverlay };
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
    z-index: 99;
  }
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 98;
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
      background: black;
      width: 5%;
      top: 12%;
      left: 92.99999%;
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
    white-space: pre-line;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
  > footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
    .Jv-ui-footer {
      display: flex;
      column-gap: 20px;
      justify-content: end;
    }
  }
}
</style>




