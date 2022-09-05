import { defineStore } from 'pinia'
import { IAuthState, IAuthUser } from './models'

export const useAuthStore = defineStore('auth', {
  state: () =>
    ({
      user: null,
      driver: ''
    } as IAuthState),
  actions: {
    setUser(user: IAuthUser | null): void {
      this.user = user
    },
    setDriver(driver: string): void {
      this.driver = driver
    }
  },
  getters: {
    isLogged: (state) => Boolean(state.user)
  }
})
