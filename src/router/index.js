import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import Chat from '@/views/Chat.vue'
import { appAuth } from '@/firebase/config'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    // auth guard
    beforeEnter: (to, from, next) => {
      let user = appAuth.currentUser

      if (!user) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
