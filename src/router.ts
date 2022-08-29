import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import InBasePage from './views/in/InBasePage.vue'
import InHomePageVue from './views/in/InHomePage.vue'
import InHobbyDetailPageVue from './views/in/InHobbyDetailPage.vue'
import InProfile from './views/in/InProfile.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: HomePage
    },
    {
      path: '/in',
      component: InBasePage,
      children: [
        {
          path: '',
          component: InHomePageVue,
          name: 'in-home'
        },
        {
          path: 'hobby/:slug',
          component: InHobbyDetailPageVue,
          name: 'hobby-detail'
        },
        {
          path: 'profile',
          component: InProfile,
          name: 'profile'
        }
      ]
    }
  ]
})

export default router
