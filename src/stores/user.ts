import { defineStore } from 'pinia'
import api from '../services/api'
import { ISettings } from '../models/user'
import { IHobby } from '../models/hobbies'

export type RootState = {
  settings: ISettings | null
  myHobbies: IHobby[]
}

export const useUserStore = defineStore('user', {
  state: () =>
    ({
      settings: null,
      myHobbies: []
    } as RootState),
  actions: {
    setSettings(settings: ISettings) {
      this.settings = settings
    },
    loadSettings() {
      api.get('/settings').then((settings: ISettings | null) => {
        this.settings = settings
      })
    },
    loadMyHobbies() {
      api.get('/my-hobbies').then((hobbies: IHobby[] | null) => {
        this.myHobbies = hobbies || []
      })
    }
  },
  getters: {}
})
