<template>
    <UApp :toaster="{ expand: false }">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>

<script setup>
const { checkAuth } = useAuth()

onMounted(() => {
    // Check auth every 10 minutes
    const interval = setInterval(() => {
        checkAuth()
    }, 1000 * 60 * 10)
    onBeforeUnmount(() => {
        clearInterval(interval)
    })
})
</script>