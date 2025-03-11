import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import AIResources from '../views/AIResources.vue'
import Training from '../views/Training.vue'
import Guidelines from '../views/Guidelines.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
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

export default router 