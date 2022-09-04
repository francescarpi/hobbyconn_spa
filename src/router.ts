import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import InBasePage from './views/in/InBasePage.vue'
import InHomePageVue from './views/in/InHomePage.vue'
import InHobbyDetailPageVue from './views/in/InHobbyDetailPage.vue'
import InProfile from './views/in/InProfile.vue'
import InSubscribeHobbyVue from './views/in/InSubscribeHobby.vue'
import InCreateHobbyPage from './views/in/InCreateHobbyPage.vue'

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
        },
        {
          path: 'subscribe',
          component: InSubscribeHobbyVue,
          name: 'subscribe'
        },
        {
          path: 'create',
          component: InCreateHobbyPage,
          name: 'create'
        }
      ]
    }
  ]
})

export default router
