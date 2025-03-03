<template>
    <div class="min-h-screen flex flex-col">
        <!-- Navebar / Header -->
        <NavBar />

        <!-- Main -->
        <div class="bg-slate-900 relative text-white flex-grow">
            <slot />
        </div>

        <!-- Footer -->
        <div class="bg-gray-800 text-white">
            <div class="px-4 sm:px-6 lg:px-8 py-2">
                <div>A small footer is coming soon 🚀</div>
            </div>
        </div>
    </div>
</template>