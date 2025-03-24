// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    plugins: [
        '~/plugins/api.ts',
    ],
    modules: [
        '@pinia/nuxt', 
        '@nuxt/ui',
        'nuxt-vue3-google-signin'
    ],
    devServer: {
        port: 3003
    },
    runtimeConfig: {
        myProxyUrl: process.env.API_BASE || 'http://localhost:3000/movie-db-app/api'
    },
    googleSignIn: {
        clientId: process.env.GOOGLE_CLIENT_ID || 'test'
    }
})