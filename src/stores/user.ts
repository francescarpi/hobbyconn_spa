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
    loadUser() {
      api.get('/user').then((user: IUser | null) => {
        this.user = user
      })
    },
    loadMyHobbies() {
      api.get('/my-hobbies').then((hobbies: IHobby[] | null) => {
        this.myHobbies = hobbies || []
      })
    }
  }
})
