export interface IHobby {
  name: string
  id: string
  slug: string
  total_matches: number
}

export interface IUserMatch {
  name: string
  id: string
}

export interface IHobbyDetail {
  name: string
  id: string
  slug: string
  description: string
  matches: IUserMatch[]
}

export interface IHobbySearchResult {
  name: string
  id: string
}

export interface IHobbyCreate {
  name: string
  require_geolocation: boolean
}

export interface IApiResponse {
  success: boolean
  message: string
}
