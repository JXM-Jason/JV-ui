<template>
  <div class="TopNav">
    <span class="toggleAside" @click="toggleAside">toggle</span>
    <div class="logo">logo</div>

    <ul class="nav">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/Doc">文档</router-link>
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
      console.log("toggleAside");

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
  .toggleAside {
    border: 1px solid blue;
    display: none;
    position: absolute;
    left: 30px;
    top: 25px;
  }
  .logo {
    border: 1px solid blue;
    width: 76px;
    height: 76px;
    line-height: 76px;
  }
  .nav {
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    li {
      display: flex;
      align-items: center;
      color: red;
      margin: 0px 15px;
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
