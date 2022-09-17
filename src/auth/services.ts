import { GoogleOauth } from './drivers/google'
import { DummyOauth } from './drivers/dummy'
import { AppleOauth } from './drivers/apple'
import { useAuthStore } from './store'

export const getInstance = (driver: string) => {
  const store = useAuthStore()
  store.setDriver(driver)
  switch (driver) {
    case 'google':
      return new GoogleOauth()
    case 'apple':
      return new AppleOauth()
  }
  return new DummyOauth()
}
