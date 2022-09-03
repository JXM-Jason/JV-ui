<template>
  <div class="layout">
    <TopNav class="nav" />
    <div class="content">
      <Transition>
        <aside v-show="asideView">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/Doc/Introduce">介绍</router-link>
            </li>
            <li>
              <router-link to="/Doc/Install">安装</router-link>
            </li>
            <li>
              <router-link to="/Doc/GetStart">快速上手</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/Doc/Switch">Switch&nbsp;开关</router-link>
            </li>
            <li>
              <router-link to="/Doc/Button">Button&nbsp;按钮</router-link>
            </li>
            <li>
              <router-link to="/Doc/Dialog">Dialog&nbsp;对话框</router-link>
            </li>
            <li><router-link to="/Doc/Tabs">Tabs&nbsp;选项卡</router-link></li>
            <li>
              <router-link to="/Doc/Select">Select&nbsp;选择器</router-link>
            </li>
            <li>
              <router-link to="/Doc/Notification"
                >Notification&nbsp;通知</router-link
              >
            </li>
            <li>
              <router-link to="/Doc/Drawer">Drawer&nbsp;抽屉</router-link>
            </li>
          </ol>
        </aside>
      </Transition>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, inject, onUpdated, Ref } from "vue";
import TopNav from "../components/Topnav.vue";
export default {
  components: {
    TopNav,
  },
  setup() {
    let asideView = inject<Ref<boolean>>("asideView");
    let calAsideView = computed(() => {
      return asideView
        ? (calAsideView.value = true)
        : (calAsideView.value = false);
    });
    onUpdated(() => {
      console.log("calAsideView", calAsideView.value);
    });

    return { asideView };
  },
};
</script>
<style lang="scss" scoped>
$aside-index: 9;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
  > .content {
    flex-grow: 1;
    padding-top: 88px;
    padding-left: 250px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  overflow: hidden;
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 56px 80px;
    background: white;
    z-index: 10;
  }
}
aside {
  box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
  background: white;
  padding: 16px 0px;
  position: fixed;
  top: 76px;
  left: 0;
  height: 100%;
  z-index: $aside-index;
  z-index: 2;
  > h2 {
    margin-bottom: 4px;
    padding: 0px 20px;
    color: black;
  }
  > ol {
    > li {
      height: 40px;
      line-height: 40px;
      > a {
        display: block;
        text-decoration: none;
        display: inline-block;
        width: 100%;
        height: 100%;
        padding: 0px 50px;
        white-space: nowrap;
        color: black;
        font-size: 18px;
      }
    }
    li:hover {
      background-color: rgb(234, 239, 250);
    }
    li .router-link-active {
      background-color: rgb(234, 239, 250);
    }
  }
}
main {
  overflow: auto;
}
@keyframes move-right1 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes move-right2 {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
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
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
