import { useApplicationUser } from '~/stores/applicationUser'
const userApplication = useApplicationUser()

export default defineNuxtRouteMiddleware(async(context) => {
      const token = useCookie('token').value
      await userApplication.setToken(token)
      await userApplication.userInformation()
  //   setTimeout(() => {
//     if (applicationToken === cookieToken.value) {
//       navigateTo('/dashboard')
//     } else {
//       navigateTo('/auth/register')
//     }
//   }, 1)
})
