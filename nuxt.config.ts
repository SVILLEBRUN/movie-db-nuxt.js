// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    plugins: [
        '~/plugins/api.ts',
    ],
    vite: {
        plugins: [
            tailwindcss(),
        ]
    },
    modules: [
        '@nuxt/icon',
        '@pinia/nuxt'
    ],
    devServer: {
        port: 3003
    },
    runtimeConfig: {
        myProxyUrl: process.env.API_BASE || 'http://localhost:3000/movie-db-app/api'
    }
})