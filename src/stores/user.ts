import { defineStore } from 'pinia'
import api from '../services/api'
import { IUser } from '../models/user'
import { IHobby } from '../models/hobbies'

export type RootState = {
  user: IUser | null
  myHobbies: IHobby[]
}

export const useUserStore = defineStore('user', {
  state: () =>
    ({
      user: null,
      myHobbies: []
    } as RootState),
  actions: {
    loadMyHobbies() {
      api.get('/my-hobbies').then((hobbies: IHobby[] | null) => {
        this.myHobbies = hobbies || []
      })
    }
  },
  getters: {}
})
