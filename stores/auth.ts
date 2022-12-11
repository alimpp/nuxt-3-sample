import { defineStore } from 'pinia'
import { base_url } from '~~/services/httpMethods'
import { useApplicationUser } from './applicationUser'
import { applicationPath } from '~~/services/applicationPath'

export const useAuth = defineStore('register', {
  actions: {
    async registerUser(param: object) {
      await fetch(`${base_url}${applicationPath.POST.ATTEMPT}`, {
        method: 'POST',
        body: JSON.stringify(param),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    },
    async sendOtp(param: object) {
      await fetch(`${base_url}${applicationPath.POST.OTP}`, {
        method: 'POST',
        body: JSON.stringify(param),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          const userApplication = useApplicationUser()
          userApplication.token = 'Bearer ' + json.data.access_token
          localStorage.setItem("token", userApplication.token)
          document.cookie = `token = ${userApplication.token};path=/;`
        })
    },
  },
  getters: {},
})
