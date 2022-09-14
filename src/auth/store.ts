import { defineStore } from 'pinia'
import { IAuthState, OAuthToken } from './models'
import { getInstance } from './services'

export const useAuthStore = defineStore('auth', {
  state: () =>
    ({
      user: null,
      driver: ''
    } as IAuthState),
  actions: {
    setUser(user: OAuthToken | null): void {
      this.user = user
    },
    setDriver(driver: string): void {
      this.driver = driver
    }
  },
  getters: {
    isLogged: (state) => {
      if (!state.user) {
        return false
      }
      const authInstance = getInstance(state.driver)
      return authInstance.isLogged()
    },
    name: (state) => state.user?.name,
    avatar: (state) => state.user?.picture
  }
})
