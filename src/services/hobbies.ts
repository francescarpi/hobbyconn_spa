import api from './api'
import { IHobbyDetail } from '../models/hobbies'

export const useHobbyDetails = async (
  slug: string
): Promise<IHobbyDetail | null> => {
  return await api.get(`/hobby/${slug}`)
}
