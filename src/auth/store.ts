import { defineStore } from 'pinia'
import { IAuthState, OAuthToken } from './models'
import { getInstance } from './services'

export const useAuthStore = defineStore('auth', {
  state: () =>
    ({
      user: null,
      token: null,
      driver: ''
    } as IAuthState),
  actions: {
    setUser(user: OAuthToken | null): void {
      this.user = user
    },
    setToken(token: string | null): void {
      this.token = token
    },
    setDriver(driver: string): void {
      this.driver = driver
    },
    isLogged(): boolean {
      if (!this.user) {
        return false
      }
      const authInstance = getInstance(this.driver)
      return authInstance.isLogged()
    }
  },
  getters: {
    name: (state) => state.user?.given_name,
    avatar: (state) => state.user?.picture
  }
})
