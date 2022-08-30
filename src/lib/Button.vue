<template>
  <button
    class="Jv-ui-button"
    :class="{ [`Jv-ui-${themes}`]: themes }"
    :disabled="disabled"
    :style="[borderRadius]"
  >
    <span v-if="Loading" class="Jv-ui-loadingIndicator"></span>
    <span class="JV-ui-text"><slot></slot></span>
  </button>
</template>


<script lang="ts">
export default {
  data() {
    return {
      borderRadius: "border-radius:" + this.round + "px",
    };
  },
  props: {
    themes: {
      type: String,
      // default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Number,
      default: 4,
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
  display: inline-block;
  font-size: 14px;
  text-align: center;
  padding: 10px 14px;
  border: 1px solid #dcdfe6;
  background: white;
  color: #313234;
  // margin-left: 10px;
  white-space: nowrap;
  line-height: 0px;
  cursor: pointer;
  -webkit-appearance: none;
  .JV-ui-text {
    display: inline-block;
    margin: 7px 0px;
  }
  &.Jv-ui-button:hover {
    color: #409eff;
    border: 1px solid #409eff;
  }
  &.Jv-ui-main {
    border: 1px solid #b3d8ff;
    color: #409eff;
    background: #ecf5ff;
  }
  &.Jv-ui-danger {
    border: 1px solid #fbc4c4;
    color: #f56c6c;
    background: #fef0f0;
  }
  &.Jv-ui-success {
    border: 1px solid #c2e7b0;
    color: #67c23a;
    background: #f0f9eb;
  }
  &.Jv-ui-info {
    border: 1px solid #d3d4d6;
    color: #909399;
    background: #f4f4f5;
  }
  &.Jv-ui-warning {
    border: 1px solid #f5dab1;
    color: #e6a23c;
    background: #fdf6ec;
  }
  &.Jv-ui-main:hover {
    color: white;
    background: #66b1ff;
    border: 1px solid transparent;
  }
  &.Jv-ui-danger:hover {
    color: white;
    background: #f78989;
    border: 1px solid transparent;
  }
  &.Jv-ui-success:hover {
    color: white;
    background: #85ce61;
    border: 1px solid transparent;
  }
  &.Jv-ui-info:hover {
    color: white;
    background: #a6a9ad;
    border: 1px solid transparent;
  }
  &.Jv-ui-warning:hover {
    color: white;
    background: #ebb563;
    border: 1px solid transparent;
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
  &[disabled]:hover {
    cursor: not-allowed;
    color: gray;
    border: 1px solid #dcdfe6;
  }
  &:focus {
    color: #409eff;
    border: 1px solid #409eff;
  }
  &.Jv-ui-main:focus {
    color: white;
    background: #66b1ff;
    border: 1px solid transparent;
  }
  &.Jv-ui-danger:focus {
    color: white;
    background: #f78989;
    border: 1px solid transparent;
  }
  &.Jv-ui-success:focus {
    color: white;
    background: #85ce61;
    border: 1px solid transparent;
  }
  &.Jv-ui-info:focus {
    color: white;
    background: #a6a9ad;
    border: 1px solid transparent;
  }
  &.Jv-ui-warning:focus {
    color: white;
    background: #ebb563;
    border: 1px solid transparent;
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