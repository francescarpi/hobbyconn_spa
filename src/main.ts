import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import GAuth from 'vue3-google-oauth2'

import '@formkit/themes/genesis'
import './assets/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig)

const gAuthOptions = {
  clientId: '790231252332-um59k7kgtv8eu2mf4gacnq8b7ptgqgql.apps.googleusercontent.com',
  scope: 'francesc.arpi@gmail.com',
  prompt: 'consent',
  fetch_basic_profile: false
}
app.use(GAuth, gAuthOptions)

app.mount('#app')
