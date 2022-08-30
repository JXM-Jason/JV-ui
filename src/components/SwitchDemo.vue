<template>
  <div>
    <h1>Switch示例</h1>
    <!-- <div class="demo">
      <div class="demo-component">
        <component :is="SwitchDemo1" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre
          class="language-html"
          v-html="
            Prism.highlight(
              SwitchDemo1.__sourceCode,
              Prism.languages.html,
              'html'
            )
          "
        ></pre>
      </div>
    </div> -->

    <Demo :component="SwitchDemo1" />

    <!-- <div class="demo">
      <div class="demo-component">
        <component :is="SwitchDemo2" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre
          class="language-html"
          v-html="
            Prism.highlight(
              SwitchDemo2.__sourceCode,
              Prism.languages.html,
              'html'
            )
          "
        ></pre>
      </div>
    </div> -->

    <Demo :component="SwitchDemo2" />

    <!-- <div class="demo">
      <div class="demo-component">
        <component :is="SwitchDemo3" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre
          class="language-html"
          v-html="
            Prism.highlight(
              SwitchDemo3.__sourceCode,
              Prism.languages.html,
              'html'
            )
          "
        ></pre>
      </div>
    </div> -->

    <Demo :component="SwitchDemo3" />

    <!-- <div class="demo">
      <div class="demo-component">
        <component :is="SwitchDemo4" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre
          class="language-html"
          v-html="
            Prism.highlight(
              SwitchDemo4.__sourceCode,
              Prism.languages.html,
              'html'
            )
          "
        ></pre>
      </div>
    </div> -->

    <Demo :component="SwitchDemo4" />
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
import Button from "../lib/Button.vue";
import SwitchDemo1 from "../components/SwitchDemo1.vue";
import SwitchDemo2 from "../components/SwitchDemo2.vue";
import SwitchDemo3 from "../components/SwitchDemo3.vue";
import SwitchDemo4 from "../components/SwitchDemo4.vue";
import Demo from "../components/Demo.vue";
import "prismjs";
const Prism = (window as any).Prism;
export default {
  components: {
    Switch,
    Button,
    Demo,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
      SwitchDemo1,
      SwitchDemo2,
      SwitchDemo3,
      SwitchDemo4,
      Prism,
      Demo,
    };
  },
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
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
</style>

<style lang="scss">
@import "prismjs/themes/prism.css";
</style>