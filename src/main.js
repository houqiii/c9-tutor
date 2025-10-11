import { createApp } from 'vue'
import App from './App.vue'

// 核心是下面这一行，它引入了我们刚刚创建的 CSS 文件
import './assets/main.css' 

createApp(App).mount('#app')