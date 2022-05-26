import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/reset.scss'
import store from './store'
import router from './router'
import 'uno.css'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
