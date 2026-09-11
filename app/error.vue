<template>
    <div class="bg-slate-900 text-white h-screen flex flex-col justify-center items-center">
        <h1 class="tracking-widest">{{ error.statusCode }} | {{ error.message }}</h1>
        <NuxtLink to="/" class="mt-7 py-1 px-3 bg-slate-800 rounded hover:bg-slate-700">Go back home</NuxtLink>
    </div>
</template>

<script setup>
    defineProps(['error'])
</script>

<style scoped>

</style>