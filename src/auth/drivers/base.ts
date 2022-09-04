export class BaseOauth {
  public login(): void {
    throw new Error('login: not implemented')
  }

  public logout(): void {
    throw new Error('logout: not implemented')
  }

  public callback(): void {
    throw new Error('callback: not implemented')
  }
}
