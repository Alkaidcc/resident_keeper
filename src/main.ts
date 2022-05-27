import { createApp } from 'vue'
import App from './App.vue'
// reset stylesheet
import '@/styles/reset.scss'
// pinia store
import pinia from '@/store/index'
// vue router
import router from '@/router/index'
import 'uno.css'

const app = createApp(App)

app.use(router).use(pinia).mount('#app')
