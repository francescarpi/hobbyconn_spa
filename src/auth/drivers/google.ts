/* global google */
/* eslint no-undef: ["error", { "typeof": true }] */

import { BaseOauth } from './base'
import router from '../../router'
import { OAuthResponse } from '../models'
import { CALLBACK_URL_NAME } from '../constants'

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
          router.push({ name: CALLBACK_URL_NAME, query: { driver: 'google', token: user.credential } })
        }
      })
      // Shows the google login prompt
      google.accounts.id.prompt()
    })
  }
}
