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
    let clientWidth = ref(document.documentElement.clientWidth);
    const asideView = ref(clientWidth.value > 700 ? true : false);
    provide("asideView", asideView);
  },
};
</script>

<style></style>
