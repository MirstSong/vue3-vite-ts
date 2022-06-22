import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/reset.css" //重置网页样式
import "./assets/css/base.css"  //全局样式
// 引入ElementPlus组件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //引入图标
import router from "./router";
import '@/permission'
// import store  from './store'   vuex
// app.use(store)



const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
app.use(ElementPlus)
app.mount('#app')


