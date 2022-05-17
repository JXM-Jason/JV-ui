<template>
  <button
    class="Jv-ui-button"
    :class="{ [`Jv-ui-${themes}`]: themes }"
    :disabled="disabled"
    :style="[borderRadius, Size]"
  >
    <span v-if="Loading" class="Jv-ui-loadingIndicator"></span>
    <slot />
  </button>
</template>


<script lang="ts">
export default {
  data() {
    return {
      borderRadius: "border-radius:" + this.round + "px",
      Size: "width:" + this.Width + "px" + ";" + "height:" + this.Height + "px",
    };
  },
  props: {
    themes: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Number,
      default: 10,
    },
    Width: {
      type: Number,
      default: 98,
    },
    Height: {
      type: Number,
      default: 40,
    },
    Loading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
};
</script>

<style lang="scss">
button.Jv-ui-button {
  font-size: 14px;
  text-align: center;
  padding: 0px 12px;
  border: 1px solid #dcdfe6;
  background: white;
  color: #313234;
  margin-left: 10px;
  white-space: nowrap;
  line-height: 0px;
  cursor: pointer;
  &.Jv-ui-button:hover {
    background: #ecf5ff;
    color: #409eff;
    border: 1px solid #409eff;
  }
  &.Jv-ui-main {
    color: white;
    background: #409eff;
  }
  &.Jv-ui-danger {
    color: white;
    background: #f56c6c;
  }
  &.Jv-ui-success {
    color: white;
    background: #67c23a;
  }
  &.Jv-ui-info {
    color: white;
    background: #909399;
  }
  &.Jv-ui-warning {
    color: white;
    background: #e6a23c;
  }
  &.Jv-ui-main:hover {
    color: white;
    background: #66b1ff;
  }
  &.Jv-ui-danger:hover {
    color: white;
    background: #f78989;
  }
  &.Jv-ui-success:hover {
    color: white;
    background: #85ce61;
  }
  &.Jv-ui-info:hover {
    color: white;
    background: #a6a9ad;
  }
  &.Jv-ui-warning:hover {
    color: white;
    background: #ebb563;
  }

  & > .Jv-ui-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    position: relative;
    top: 2px;
    margin-right: 5px;
    border-style: solid;
    border-color: #40a9ff #40a9ff #40a9ff transparent;
    border-radius: 8px;
    border-width: 2px;
    animation: IndicatorSpin 1s infinite linear;
  }
  &[disabled] {
    cursor: not-allowed;
    color: gray;
  }
}
@keyframes IndicatorSpin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>