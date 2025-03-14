<template>
    <ClientOnly v-if="!colorMode?.forced">
        <UButton
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="neutral"
            variant="ghost"
            @click="isDark = !isDark"
        />
            <template #fallback>
                <div class="size-8" />
            </template>
    </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()
console.log(colorMode)

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>
