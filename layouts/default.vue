<template>
    <div class="min-h-screen flex flex-col">
        <!-- Navebar / Header -->
        <div class="bg-gray-800 sticky top-0 z-50">
            <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <NuxtLink class="block text-white font-bold text-4xl" to="/">
                    MES FILMS
                </NuxtLink>

                <div class="flex flex-1 items-center justify-end md:justify-between">
                    <!-- Search bah to come -->
                    <div class="text-white"></div>
                    <div class="flex items-center gap-4">
                        <div class="sm:flex sm:gap-4">
                            <NuxtLink
                                class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-500"
                                to="/login"
                            >
                                Login
                            </NuxtLink>

                            <NuxtLink
                                class="hidden rounded-md px-5 py-2.5 text-sm font-medium transition sm:block dark:bg-gray-900 text-white hover:text-white/75"
                                href="/register"
                            >
                                Register
                            </NuxtLink>
                        </div>

                        <!-- Bouton de menu au cas ou j'en ai besoins -->
                        <!-- <button
                            class="block rounded-sm p-2.5 transition md:hidden text-white hover:text-white/75"
                        >
                            <span class="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button> -->
                    </div>
                </div>
            </div>
        </div>

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

