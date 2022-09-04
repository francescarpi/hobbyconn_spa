import api from './api'
import { IHobbyDetail, IHobbySearchResult, IHobbyCreate, IApiResponse } from '../models/hobbies'

export const useHobbyDetail = async (slug: string): Promise<IHobbyDetail | null> => {
  return await api.get(`/hobby/${slug}`)
}

export const useSearchHobby = async (query: string): Promise<IHobbySearchResult[]> => {
  return await api.get(`/search/hobby/?q=${query}`)
}

export const createHobby = async (data: IHobbyCreate): Promise<IApiResponse> => {
  return await api.post('/hobby/create/', data)
}
