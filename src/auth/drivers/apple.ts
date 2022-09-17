/* global AppleID */
/* eslint no-undef: ["error", { "typeof": true }] */
import { BaseOauth } from './base'
import { OAuthToken } from '../models'

export class AppleOauth extends BaseOauth {
  public async login(): Promise<void> {
    const script = document.createElement('script')
    script.src = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js'
    document.head.appendChild(script)

    // Once it's loaded, the client can be initiated
    await script.addEventListener('load', () => {
      AppleID.auth.init({
        clientId: '[CLIENT_ID]',
        scope: '[SCOPES]',
        redirectURI: '[REDIRECT_URI]',
        state: '[STATE]',
        nonce: '[NONCE]',
        usePopup: true
      })
    })

    document.addEventListener('AppleIDSignInOnSuccess', (event) => {
      // Handle successful response.
      console.log('success', event.detail.data)
    })

    document.addEventListener('AppleIDSignInOnFailure', (event) => {
      // Handle error.
      console.log('error', event.detail.error)
    })
  }

  protected checkToken(token: OAuthToken): boolean {
    return true
  }
}
