export interface IAuthUser {
  name: string
}

export interface IAuthState {
  user: IAuthUser | null
}
