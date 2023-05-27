import './style.css'
import App from './App.vue'
import router from './router'
import pinia from './pinia'
import { createApp } from 'vue'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
