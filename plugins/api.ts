export default defineNuxtPlugin(() => {
    const { logout } = useAuth();
    
    const handleError = (error: any) => {
        if (error.response?.status === 401) {
            logout();
        }
        throw error;
    }

    const api = {
        get: async (url: string, options = {}) => {
            try {
                return await $fetch(url, { credentials: 'include', ...options })
            } catch (error : any) {
                handleError(error)
            }
        },
        post: async (url: string, body: Record<string, any> = {}, options = {}) => {
            try {
                return await $fetch(url, { method: 'POST', credentials: 'include', body, ...options })
            } catch (error : any) {
                handleError(error)
            }
        },
        put: async (url: string, body: Record<string, any> = {}, options = {}) => {
            try {
                return await $fetch(url, { method: 'PUT', body, credentials: 'include', ...options })
            } catch (error : any) {
                handleError(error)
            }
        },
        delete: async (url: string, options = {}) => {
            try {
                return await $fetch(url, { method: 'DELETE', credentials: 'include', ...options })
            } catch (error : any) {
                handleError(error)
            }
        }
    }

    return {
        provide: {
            api
        }
    }
})

/*
    // GET
    const { data, error } = await $api.get('/movies')

    // POST
    const { data: postData, error: postError } = await $api.post('/movies', {
        title: 'Nouveau Film',
        year: 2025
    })

    // PUT
    const { data: putData, error: putError } = await $api.put('/movies/1', {
        title: 'Titre modifié'
    })

    // DELETE
    const { data: deleteData, error: deleteError } = await $api.delete('/movies/1')
*/