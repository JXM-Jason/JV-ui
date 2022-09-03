<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="toggle">{{ text }}</Button>
    </div>
    <Transition>
      <div class="demo-code" v-show="boolShow">
        <pre
          class="language-html"
          v-html="
            Prism.highlight(
              component.__sourceCode,
              Prism.languages.html,
              'html'
            )
          "
        ></pre>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import "prismjs";
import Button from "../lib/Button.vue";
import { ref } from "vue";
const Prism = (window as any).Prism;
export default {
  components: {
    Button,
  },
  props: {
    component: Object,
  },
  setup() {
    let boolShow = ref(false);
    let text = ref("查看代码");
    let toggle = () => {
      boolShow.value = !boolShow.value;
      boolShow.value ? (text.value = "隐藏代码") : (text.value = "查看代码");
    };
    return { Prism, boolShow, toggle, text };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  box-shadow: 0px 0px 5px 2px rgb(224, 222, 222);
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<style lang="scss">
@import "prismjs/themes/prism.css";
</style>