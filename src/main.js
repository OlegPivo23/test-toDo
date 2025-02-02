import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vEscClose from './directives/vEscClose'

const app = createApp(App)

app.use(router)
app.directive('esc-close', vEscClose)
app.mount('#app')
