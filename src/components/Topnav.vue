<template>
  <div class="TopNav">
    <span class="toggleAside" @click="toggleAside">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </router-link>

    <ul class="nav">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/Doc/Introduce">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  setup() {
    let asideView = inject<Ref<boolean>>("asideView");
    const toggleAside = () => {
      asideView.value = !asideView.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
.TopNav {
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  position: relative;
  padding: 0px 60px;
  .toggleAside {
    display: none;
    position: absolute;
    left: 30px;
    top: 25px;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  .logo {
    width: 76px;
    height: 76px;
    line-height: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
      width: 56px;
      height: 56px;
    }
    > svg:hover {
      scale: 1.1;
    }
  }
  .nav {
    display: flex;
    flex-direction: row;
    li {
      display: flex;
      align-items: center;
      margin: 0px 15px;
      a {
        color: black;
      }
    }
  }
}
@media (max-width: 500px) {
  .TopNav {
    justify-content: center;
    .nav {
      display: none;
    }
    .toggleAside {
      display: inline-block;
      position: absolute;
      left: 30px;
    }
  }
}
</style>
