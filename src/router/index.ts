import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import Doc from "../views/Doc.vue"
import Switch from "../components/SwitchDemo.vue"
import Button from "../components/ButtonDemo.vue"
import Dialog from "../components/DialogDemo.vue"
import Tabs from "../components/TabsDemo.vue"
import Select from "../components/SelectDemo.vue"
import Notification from "../components/NotificationDemo.vue"
import Drawer from "../components/DrawerDemo.vue"
import Markdown from '../components/Markdown.vue'
import { h } from "vue"
const renderMd = fileName=> h(Markdown,{path: `../markdown/${fileName}.md`,key:fileName}) 
const routes = [
  { path: "/", component: Home },
  {
    path: "/Doc",
    component: Doc,
    children: [
      { path: "/Doc/Introduce", component: renderMd('Introduce') },
      { path: "/Doc/Install", component: renderMd('Install') },
      {path: "/Doc/GetStart", component: renderMd('GetStart')},
      { path: "/Doc/Switch", component: Switch },
      { path: "/Doc/Button", component: Button },
      { path: "/Doc/Dialog", component: Dialog },
      { path: "/Doc/Tabs", component: Tabs },
      { path: "/Doc/Select", component: Select },
      { path: "/Doc/Notification", component: Notification },
      {path: "/Doc/Drawer",component: Drawer}
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
