import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import { persistPinia } from './services/persist-pinia'

import '@formkit/themes/genesis'
import './assets/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
persistPinia(pinia)
app.use(pinia)

app.use(router)
app.use(plugin, defaultConfig)

app.mount('#app')
