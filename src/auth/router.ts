import LogoutPage from './views/LogoutPage.vue'
import LoginPage from './views/LoginPage.vue'
import CallbackPage from './views/CallbackPage.vue'
import ErrorPage from './views/ErrorPage.vue'
import { LOGIN_URL_NAME, LOGOUT_URL_NAME, CALLBACK_URL_NAME, ERROR_URL_NAME } from './constants'

export const routes = [
  {
    path: '/auth',
    children: [
      {
        path: 'logout',
        component: LogoutPage,
        name: LOGOUT_URL_NAME
      },
      {
        path: 'login',
        component: LoginPage,
        name: LOGIN_URL_NAME
      },
      {
        path: 'callback',
        component: CallbackPage,
        name: CALLBACK_URL_NAME
      },
      {
        path: 'error',
        component: ErrorPage,
        name: ERROR_URL_NAME
      }
    ]
  }
]
