<template>
  <div class="Doc">
    <TopNav />
    <div class="content">
      <aside v-show="asideView">
        <h1>组件列表</h1>
        <ol>
          <li><router-link to="/Doc/Switch">switch组件</router-link></li>
          <li><router-link to="/Doc/Button">button组件</router-link></li>
          <li><router-link to="/Doc/Dialog">dialog组件</router-link></li>
          <li><router-link to="/Doc/Tabs">tabs组件</router-link></li>
        </ol>
      </aside>
      <main>
        主要内容
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject } from "vue";
import TopNav from "../components/Topnav.vue";
export default {
  components: {
    TopNav,
  },
  setup() {
    let asideView = inject("asideView");
    return { asideView };
  },
};
</script>
<style lang="scss" scoped>
.Doc {
  // border: 1px solid indigo;

  .content {
    display: flex;
    flex-direction: row;
    z-index: 20;
    height: 100vh;
    height: calc(100vh - 76px);
    > aside {
      // border: 1px solid indigo;
      background-color: lightblue;
      width: 150px;
      height: 100%;
    }
    > main {
      // border: 1px solid indigo;
      background-color: pink;
      width: 100%;
      // height: 117px;
      height: calc(100vh - 76px);
      margin-left: 5px;
      overflow-y: scroll;
    }
  }
}
</style>
