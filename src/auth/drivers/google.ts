/* global google */
/* eslint no-undef: ["error", { "typeof": true }] */

import { BaseOauth } from './base'
import { JWTDecode } from '../../utils/jwt'
import { useAuthStore } from '../store'
import router from '../../router'
import { OAuthResponse, OAuthToken } from '../models'

export class GoogleOauth extends BaseOauth {
  public async login(): Promise<void> {
    // Inject the google api script to the dom
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    document.head.appendChild(script)

    // Once it's loaded, the client can be initiated
    await script.addEventListener('load', () => {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: (user: OAuthResponse) => {
          this.callback(user.credential)
        }
      })
      // Shows the google login prompt
      google.accounts.id.prompt()
    })
  }

  public callback(token: string): void {
    const user: OAuthToken = JWTDecode(token)
    const store = useAuthStore()
    store.setUser({
      name: user.name
    })
    router.push({ name: 'in-home' })
  }

  public logout(): void {
    const store = useAuthStore()
    store.setUser(null)
  }
}
