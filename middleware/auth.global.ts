export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore()
    const { checkAuth } = useAuth()
    if (authStore.isLoggedIn === null) {
        await checkAuth()
    }
})