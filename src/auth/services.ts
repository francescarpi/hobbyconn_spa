import { GoogleOauth } from './drivers/google'
import { DummyOauth } from './drivers/dummy'
import { useAuthStore } from './store'

export const getInstance = (driver: string) => {
  const store = useAuthStore()
  store.setDriver(driver)
  switch (driver) {
    case 'google':
      return new GoogleOauth()
  }
  return new DummyOauth()
}
