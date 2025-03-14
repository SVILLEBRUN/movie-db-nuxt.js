<template>
    <div class="text-sm sm:text-base">
        <div>Password Reset</div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'login',
    middleware: 'auth'
})
</script>