

import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Guest from './components/guestbook.vue'
import './assets/main.css'


const app = createApp(App)
app.component('Home', Home)
app.component('Guest', Guest)
app.mount('#app')
