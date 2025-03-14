<template>
    <div class="sticky top-0 z-50 bg-(--ui-bg-elevated)">
        <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <NuxtLink class="flex gap-2 items-center font-bold text-3xl" to="/">
                <span>MOVIES</span>
                <AppLogo svg-class="fill-(--ui-primary)" svg-height="50" svg-width="50"></AppLogo>
            </NuxtLink>

            <div class="flex flex-1 items-center justify-end md:justify-between gap-8">
                <!-- Search bar large media -->
                <div class="hidden sm:block flex-grow">
                    <UInput 
                        v-model="query"
                        @keyup.enter="search()"
                        placeholder="Rechercher un film ..."
                        trailing-icon="eva:search-outline"
                        class="w-full"
                        size="xl"
                    />
                </div>
                <div class="flex items-center gap-4">
                    <div v-if="!authStore.isLoggedIn" class="sm:flex sm:gap-4">
                        <UButton to="/login" label="Se connecter" class="px-5 py-2.5 border-none"/>
                        <UButton to="/register" label="S'inscrire" class="px-5 py-2.5 hidden sm:block" variant="outline" color="neutral"/>
                    </div>
                    <div v-else class="sm:flex sm:gap-4">
                        <!-- TODO: Move to the avatar button -->
                        <button
                            class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white tranqsition hover:bg-teal-500"
                            @click="logout()"
                        >
                            Se deconnecter
                        </button>
                    </div>
                    <div>
                        <BaseColorModeButton />
                    </div>

                    <!-- TODO: Change to avatar -->
                    <button
                        v-if="authStore.isLoggedIn"
                        class="block rounded-sm p-2.5 transition text-white hover:text-white/75"
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
                    </button>
                </div>
            </div>
        </div>
        <div class="w-full sm:hidden px-2 mb-2">
            <UInput 
                v-model="query"
                @keyup.enter="search()"
                placeholder="Rechercher un film ..."
                trailing-icon="eva:search-outline"
                class="w-full"
                size="xl"
            />
        </div>
    </div>
</template>

<script setup>
import auth from '~/middleware/auth';

const query = ref('');

const router = useRouter()

const authStore = useAuthStore();

const { logout } = useAuth();

const search = () => {
    // Function to search data (person / movie) 
    console.log(query.value)

    router.push({
        path: '/search',
        query: {
            query: query.value
        }
    })
}
</script>