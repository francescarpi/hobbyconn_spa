/* global google */
/* eslint no-undef: ["error", { "typeof": true }] */

import { BaseOauth } from './base'
import router from '../../router'
import { OAuthResponse, OAuthToken } from '../models'
import { CALLBACK_URL_NAME } from '../constants'
import { useAuthStore } from '../store'

export class GoogleOauth extends BaseOauth {
  private injectScript(): HTMLElement {
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    document.head.appendChild(script)
    return script
  }

  public async login(): Promise<void> {
    const script = this.injectScript()
    await script.addEventListener('load', () => {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: (user: OAuthResponse) => {
          router.push({ name: CALLBACK_URL_NAME, query: { driver: 'google', token: user.credential } })
        }
      })

      // Shows the google login prompt
      google.accounts.id.prompt()
    })
  }

  protected checkToken(token: OAuthToken): boolean {
    if (token.aud !== import.meta.env.VITE_GOOGLE_CLIENT_ID) {
      return false
    }

    if (token.azp !== import.meta.env.VITE_GOOGLE_CLIENT_ID) {
      return false
    }

    if (token.iss !== 'https://accounts.google.com') {
      return false
    }

    if (!token.email_verified) {
      return false
    }

    const now = Math.floor(Date.now() / 1000)
    if (token.exp < now) {
      return false
    }

    return true
  }

  public logout(): void {
    const store = useAuthStore()
    if (store.user) {
      const { sub } = store.user
      // If the page has been reload, the google object doesn't exist and is necessary to load the client again
      if (typeof google === 'undefined') {
        const script = this.injectScript()
        script.addEventListener('load', () => {
          google.accounts.id.revoke(sub)
        })
      } else {
        google.accounts.id.revoke(sub)
      }
    }
    super.logout()
  }
}
