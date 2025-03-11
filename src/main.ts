import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'

// Import routes
import Home from './views/Home.vue'
import AIResources from './views/AIResources.vue'
import Training from './views/Training.vue'
import Guidelines from './views/Guidelines.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ai-resources',
      name: 'AIResources',
      component: AIResources
    },
    {
      path: '/training',
      name: 'Training',
      component: Training
    },
    {
      path: '/guidelines',
      name: 'Guidelines',
      component: Guidelines
    }
  ]
})

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app') 