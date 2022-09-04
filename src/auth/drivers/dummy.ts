import { BaseOauth } from './base'
import router from '../../router'
import { useAuthStore } from '../store'
import { CALLBACK_URL_NAME } from '../constants'

export class DummyOauth extends BaseOauth {
  public login(): void {
    router.push({ name: CALLBACK_URL_NAME, query: { driver: 'dummy' } })
  }

  public callback(): void {
    const store = useAuthStore()
    store.setUser({
      name: 'Dummy User'
    })
    router.push('/')
  }
}