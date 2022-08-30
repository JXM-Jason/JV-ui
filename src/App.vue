<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, provide } from "vue";
import TopNav from "./components/Topnav.vue";
export default {
  name: "App",
  components: {
    TopNav,
  },
  setup() {
    let clientWidth = document.documentElement.clientWidth;
    const asideView = ref(clientWidth > 700 ? true : false);
    console.log("asideView", asideView.value);

    provide("asideView", asideView);
  },
};
</script>

<style></style>
