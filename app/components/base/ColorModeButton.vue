<template>
    <ClientOnly v-if="!colorMode?.forced">
        <UButton
            class="cursor-pointer dark:hover:text-neutral-400 hover:text-neutral-500"
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="neutral"
            variant="ghost"
            @click="isDark = !isDark"
        />
            <template #fallback>
                <div class="size-8" />
            </template>
        
        <UButton
            class="cursor-pointer dark:hover:text-neutral-400 hover:text-neutral-500"
            :icon="'i-lucide-monitor'"
            color="neutral"
            variant="ghost"
            @click="colorMode.preference = 'system'"
        />
    </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>
