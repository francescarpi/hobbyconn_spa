export class BaseOauth {
  public async login(): Promise<void> {
    throw new Error('login: not implemented')
  }

  public logout(): void {
    throw new Error('logout: not implemented')
  }

  public callback(data?: any): void {
    throw new Error('callback: not implemented')
  }
}
