import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import Doc from "../views/Doc.vue"
import Switch from "../components/Switch.vue"
import Button from "../components/Button.vue"
import Dialog from "../components/Dialog.vue"
import Tabs from "../components/Tabs.vue"
const routes = [
  { path: "/", component: Home },
  {
    path: "/Doc",
    component: Doc,
    children: [
      { path: "/Doc/Switch", component: Switch },
      { path: "/Doc/Button", component: Button },
      { path: "/Doc/Dialog", component: Dialog },
      { path: "/Doc/Tabs", component: Tabs },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
