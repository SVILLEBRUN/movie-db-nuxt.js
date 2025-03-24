import type { User } from '~/types';
import { useAuthStore } from '~/stores/auth';

export const useAuth = () => {
    const { $api } = useNuxtApp()
    const authStore = useAuthStore();

    const register = async (user_data:User) => {
        try {
            const response = await $api.post('/api/auth/register', user_data) as any
            navigateTo('/');
            authStore.isLoggedIn = true
            authStore.user = response.user
        } catch (error : any) {
            throw error
        }
    }

    const google_register = async (token:string) => {
        try {
            const response = await $api.post('/api/auth/google-register', { token }) as any
            navigateTo('/');
            authStore.isLoggedIn = true
            authStore.user = response.user
        } catch (error : any) {
            throw error
        }
    }

    const google_login = async (token:string) => {
        try {
            const response = await $api.post('/api/auth/google-login', { token }) as any
            navigateTo('/');
            authStore.isLoggedIn = true
            authStore.user = response.user
        } catch (error : any) {
            throw error
        }
    }
    
    const login = async (credentials: { email: string; password: string }) => {
        try {
            const response = await $api.post('/api/auth/login', credentials) as any
            navigateTo('/');
            authStore.isLoggedIn = true
            authStore.user = response.user
        } catch (error : any) {
            throw error
        }
    }


    const logout = () => {
        authStore.isLoggedIn = false
        authStore.user = null
        $fetch('/api/auth/logout', { method: 'POST', credentials: 'include' }).catch((error) => console.log(error))
    }

    const checkAuth = async () => {
        try {
            const event = useRequestEvent()
            const response = await $api.get('/api/auth/check-auth', { 
                headers: event ? { cookie: event.node.req.headers.cookie || '' } : {},
            }) as any
            if(!authStore.isLoggedIn) authStore.isLoggedIn = true
            if(!authStore.user) authStore.user = response.user
        } catch (error : any) {
            if(authStore.isLoggedIn) logout();
        }
    }

    return {
        register,
        google_register,
        login,
        google_login,
        logout,
        checkAuth
    }
}