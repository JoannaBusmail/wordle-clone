import { createRouter, createWebHistory } from 'vue-router'
import GameView from '../views/GameView.vue'
import IntroView from '../views/IntroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: IntroView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
 
  ]
})

export default router
