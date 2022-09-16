export interface OAuthToken {
  name: string
  aud: string
  azp: string
  email_verified: boolean
  exp: number
  picture: string
  iss: string
  sub: string
}

export interface IAuthState {
  user: OAuthToken | null
  driver: string
  token: string | null
}

export interface OAuthResponse {
  credential: string
}
