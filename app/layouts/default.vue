<template>
    <div class="min-h-screen flex flex-col">
        <!-- Navebar / Header -->
        <NavBar />

        <!-- Main -->
        <div class="relative grow">
            <slot />
        </div>

        <!-- Footer -->
        <div class="bg-elevated">
            <div class="px-4 sm:px-6 lg:px-8 py-2">
                <div class="color-primary">Un petit footer arrive bientôt 🚀</div>
            </div>
        </div>
    </div>
</template>