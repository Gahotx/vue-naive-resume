import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import './style/main.css'
import 'uno.css'
import '@unocss/reset/normalize.css'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)

app.use(createPinia().use(persist))
app.use(router)

app.mount('#app')
