import { GoogleOauth } from './drivers/google'
import { DummyOauth } from './drivers/dummy'

export const getInstance = (driver: string) => {
  switch (driver) {
    case 'google':
      return new GoogleOauth()
  }
  return new DummyOauth()
}
