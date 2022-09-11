export interface IAuthUser {
  name: string
}

export interface IAuthState {
  user: IAuthUser | null
  driver: string
}

export interface OAuthToken {
  name: string
}

export interface OAuthResponse {
  credential: string
}
