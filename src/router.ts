import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import InBasePage from './views/in/InBasePage.vue'
import InHomePageVue from './views/in/InHomePage.vue'
import InHobbyDetailPageVue from './views/in/InHobbyDetailPage.vue'
import InProfile from './views/in/InProfile.vue'
import InSubscribeHobbyVue from './views/in/InSubscribeHobby.vue'
import InCreateHobbyPage from './views/in/InCreateHobbyPage.vue'
import { routes as authRoutes } from './auth/router'
import { useAuthStore } from './auth/store'
import { LOGIN_URL_NAME } from './auth/constants'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: HomePage
    },
    {
      path: '/auth',
      children: authRoutes
    },
    {
      path: '/in',
      component: InBasePage,
      meta: { requireAuth: true },
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

router.beforeEach((to, from) => {
  const requireAuth = Boolean(to.meta.requireAuth)
  const isLogged = useAuthStore().isLogged()

  if (requireAuth && !isLogged) {
    return { name: LOGIN_URL_NAME, query: { after: to.fullPath } }
  }
})

export default router
