import { BaseOauth } from './base'
import router from '../../router'
import { CALLBACK_URL_NAME } from '../constants'
import { OAuthToken } from '../models'

export class DummyOauth extends BaseOauth {
  public async login(): Promise<void> {
    router.push({
      name: CALLBACK_URL_NAME,
      query: {
        driver: 'dummy',
        token:
          'eyJhbGciOiJSUzI1NiIsImtpZCI6ImNhYWJmNjkwODE5MTYxNmE5MDhhMTM4OTIyMGE5NzViM2MwZmJjYTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NjMwOTY2MTksImF1ZCI6Ijc5MDIzMTI1MjMzMi11bTU5azdrZ3R2OGV1Mm1mNGdhY25xOGI3cHRncWdxbC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjQzMTY1NjkzNjU1MDE5NjUzOSIsImVtYWlsIjoiZnJhbmNlc2MuYXJwaUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiNzkwMjMxMjUyMzMyLXVtNTlrN2tndHY4ZXUybWY0Z2FjbnE4YjdwdGdxZ3FsLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6IkZyYW5jZXNjIEFycMOtIFJvY2EiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FGZFp1Y3JZWDFzazhqWlk3aE5RaWtXejZxeG5Ebl9kV3d0VFJKSkY2Yk94VFE9czk2LWMiLCJnaXZlbl9uYW1lIjoiRnJhbmNlc2MiLCJmYW1pbHlfbmFtZSI6IkFycMOtIFJvY2EiLCJpYXQiOjE2NjMwOTY5MTksImV4cCI6MTY2MzEwMDUxOSwianRpIjoiYTZhNzc2NTRkZjhkZTg1YjdiMzhiYWQzNmJlMTNhMGRkNjI2NzljNyJ9.H_sxRl6-tP3ILNfu-vAIpQHYsBRmHKykfLlm4qHeera_QAqYDG9lf97xjzH6QmeVcb3vO-lGY-1ljTN2HZfDxOkIDMTL_w-DHT3rbI78E91D9J2s93CmQkqZZtgndM5UVUBnFTwob7y5Egf-qw75AA0E1BllT64UCS5zWaEI9fi_NhDix0u6jOPwt45zgv1v3-NySymBfCYCLUJSyQlh2arhxav5palLCkJL8BSNf-SbSFATlUO-tie1GCQgzsRwt0_XygdTxt34J4hk25zHXiPlKtarWHPHqqByr4EaOkyUmc1EJepcJzlrQ0alkmigXVu3KW-Lx5JF_cdK_Nxn-Q'
      }
    })
  }

  protected checkToken(token: OAuthToken): boolean {
    return true
  }

  public isLogged(): boolean {
    return true
  }
}
