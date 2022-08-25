import "./lib/JV.scss"
import "./index.scss"
import { createApp } from "vue"
import router from "./router/index"
import 'github-markdown-css'
import App from "./App.vue"
import Markdown from './components/Markdown.vue'

const app = createApp(App)
app.component('Markdown',Markdown)
app.use(router)
app.mount("#app")
