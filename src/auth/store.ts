import { defineStore } from 'pinia'
import { IAuthState, IAuthUser } from './models'

export const useAuthStore = defineStore('auth', {
  state: () =>
    ({
      user: null
    } as IAuthState),
  actions: {
    setUser(user: IAuthUser) {
      this.user = user
    }
  },
  getters: {
    isLogged: (state) => Boolean(state.user)
  }
})
