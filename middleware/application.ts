import { useApplicationUser } from '~/stores/applicationUser'
const userApplication = useApplicationUser()

export default defineNuxtRouteMiddleware(() => {
  const local = useCookie('token')
  userApplication.setToken(local)
})
