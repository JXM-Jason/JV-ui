<template>
  <template>
    <teleport to="body">
      <div>
        <div class="Jv-ui-arrow"></div>
        <div class="Jv-ui-select-dropdown">
          <ul class="Jv-ui-options">
            <li class="Jv-ui-select-item">
              {{ label }}
            </li>
          </ul>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  setup(props, context) {
    // console.log("props-label");

    // console.log(props.label);
    // console.log("slots", context.slots);

    return {};
  },
};
</script>

<style lang="scss">
.Jv-ui-option {
  // border: 1px solid red;
  // height: 200px;
  // width: 200px;
}
.Jv-ui-select-dropdown {
  // height: 230px;
  transition: height 200ms;
}
.isActive .Jv-ui-select-dropdown {
  height: 0px;
  border: none;
}
.isActive .Jv-ui-arrow {
  border-width: 10px;
  // display: none;
  border-color: transparent;
  border: none;
}

.Jv-ui-arrow {
  border-top: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #f2f3f6;
  height: 0px;
  width: 0px;
  position: relative;
  left: 10px;
}
.Jv-ui-select-dropdown {
  width: 218px;
  height: 210px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  .Jv-ui-options {
    width: 234px;
    height: 218px;
    color: #607996;
    border-radius: 4px;
    overflow: scroll;
    margin-top: 10px;
    .Jv-ui-select-item {
      padding: 0px 20px;
    }
    .Jv-ui-select-item:hover {
      background-color: #f5f7fa;
    }
  }
}
</style>
