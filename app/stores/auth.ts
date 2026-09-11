import { defineStore } from 'pinia';
import type { User } from '~/types';


export const useAuthStore = defineStore('auth', () => {
    const isLoggedIn = ref(null as boolean | null);

    const user = ref(null as User | null);


    const setLoggedIn = (status: boolean) => {
        isLoggedIn.value = status
    }

    return {
        isLoggedIn,
        user,
        setLoggedIn,
    };
});
