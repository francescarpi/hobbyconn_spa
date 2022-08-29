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
}

const api = new Api('http://localhost:3001/api/v1')

export default api
