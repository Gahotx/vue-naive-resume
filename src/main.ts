import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './stores'

import './styles/main.css'
import 'uno.css'
import '@unocss/reset/normalize.css'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
