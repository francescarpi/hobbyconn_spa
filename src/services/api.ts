class Api {
  private host = ''

  constructor(host: string) {
    this.host = host
  }

  public get(path: string): Promise<any | null> {
    return fetch(`${this.host}${path}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error('RESPONSE ERROR', error)
        return null
      })
  }

  public post(path: string, data: any): Promise<any | null> {
    return fetch(`${this.host}${path}`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('RESPONSE ERROR', error)
        return null
      })
  }
}

const api = new Api('http://localhost:3001/api/v1')

export default api
