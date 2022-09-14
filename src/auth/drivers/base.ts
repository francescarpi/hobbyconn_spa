import { useAuthStore } from '../store'
import { JWTDecode } from '../../utils/jwt'
import router from '../../router'
import { OAuthToken } from '../models'
import { ERROR_URL_NAME } from '../constants'

export class BaseOauth {
  public async login(): Promise<void> {
    throw new Error('login: not implemented')
  }

  public logout(): void {
    const store = useAuthStore()
    store.setUser(null)
  }

  public callback(token: string): void {
    const user: OAuthToken = JWTDecode(token)
    if (!this.checkToken(user)) {
      router.push({ name: ERROR_URL_NAME })
      return
    }

    const store = useAuthStore()
    store.setUser(user)
    router.push({ name: 'in-home' })
  }

  protected checkToken(token: OAuthToken): boolean {
    throw new Error('checkToken: not implemented')
  }

  public isLogged(): boolean {
    throw new Error('isLogged: not implemented')
  }
}
