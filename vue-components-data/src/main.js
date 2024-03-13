import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 提供全局数据，在任何地方都能读到,
// 任何一个组件中都可使用inject获取到
app.provide("globalData","我是全局数据")

app.mount('#app')
