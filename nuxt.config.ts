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
        'nuxt-google-auth'
    ],
    devServer: {
        port: 3003
    },
    runtimeConfig: {
        myProxyUrl: process.env.API_BASE
    },
    googleAuth: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        autoLoadScript: false,
        promptOneTap: false,
        enableServerVerify: false
    }
})