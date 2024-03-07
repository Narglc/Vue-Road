
import { createApp } from 'vue'
import App from './App.vue'
import Header from './pages/Header.vue'

const app = createApp(App)

// 组件的全局注册，必须在这中间进行注册
app.component("Header", Header)

app.mount('#app')
