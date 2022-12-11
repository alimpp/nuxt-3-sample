import { defineStore } from 'pinia'
import { base_url } from '@/services/httpMethods'
import { applicationPath } from '~~/services/applicationPath'
export interface IApplicationUser {
  id: number
  email: string
  token: string
  isAuthenticated: boolean
  phoneNumber: string
}

export const useApplicationUser = defineStore('applicationUser', {
  state: (): IApplicationUser => ({
    id: 0,
    email: '',
    token: '',
    isAuthenticated: true,
    phoneNumber: '',
  }),
  actions: {
    async setToken(token: any) {
      this.token = token
    },
    setPhoneNumber(phoneNumber: string) {
      this.phoneNumber = phoneNumber
    },
    changeUserAuth(isAuth: boolean) {
      this.isAuthenticated = isAuth
    },
    setUserInformation(id: number, email: string, phoneNumber: string) {
      this.id = id
      this.email = email
      this.phoneNumber = phoneNumber
    },
    async userInformation() {
      const res = await fetch(`${base_url}${applicationPath.GET.USER}`, {
        headers: { Authorization: this.token },
      })
        .then((response) => response.json())
        .then((json) =>
          this.setUserInformation(
            json.data.user.id,
            json.data.user.email,
            json.data.user.mobile
          )
        )
    },
  },
})

// headers: {Authentication: 'Bearer Token'}
