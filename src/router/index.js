import { createRouter, createWebHistory } from 'vue-router'
import HomeMain from '../views/HomeMain.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeMain
  },
  {
    path: '/aboutUs',
    name: 'About',
    component: AboutUs 
  },
  {
    path: '/contactUs',
    name: 'Contact',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
