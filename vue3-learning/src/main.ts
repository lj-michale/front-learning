/**
 * 主要职责：创建一个vue应用，理解成之前的根实例
 * */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'
import i18n from './i18n/i18n'
import { createPinia } from 'pinia'
import '@/router/permission'
import permission from '@/directive/permission/button.js'
import '../docs'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(createPinia())
app.use(i18n)
app.use(ElementPlus) // 使用element-ui
app.use(router)
app.directive('roleBtn', permission)
app.mount('#app')
