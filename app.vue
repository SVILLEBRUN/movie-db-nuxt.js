<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
onMounted(() => {
    const { checkAuth } = useAuth()
    // Check auth every 10 minutes
    const interval = setInterval(() => {
        checkAuth()
    }, 1000 * 60 * 10)
    onBeforeUnmount(() => {
        clearInterval(interval)
    })
})


</script>