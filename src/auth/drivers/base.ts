import { useAuthStore } from '../store'
import { JWTDecode } from '../../utils/jwt'
import router from '../../router'
import { OAuthToken } from '../models'

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
    const store = useAuthStore()
    store.setUser({
      name: user.name
    })
    router.push({ name: 'in-home' })
  }
}
