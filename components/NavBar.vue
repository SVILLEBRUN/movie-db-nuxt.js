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
                        <UButton to="/login" label="Se connecter" class="px-5 py-2.5"/>
                        <UButton to="/register" label="S'inscrire" class="px-5 py-2.5 hidden sm:block" variant="outline" color="neutral"/>
                    </div>
                    <div v-else class="sm:flex sm:gap-4">
                        <UDropdownMenu
                            :items="avatarMenuItems"
                            class="cursor-pointer"
                            :content="{
                                align: 'start',
                                side: 'bottom',
                                sideOffset: 8
                            }"
                            :ui="{
                                content: 'w-48',
                            }"
                        >
                            <UAvatar v-if="authStore.user?.avatar" :src="authStore.user.avatar" size="lg" />
                            <UAvatar 
                                v-else 
                                :alt="authStore.user?.first_name + ' ' + authStore.user?.last_name" 
                                size="lg" 
                                :ui="{ fallback: 'text-(--ui-text) w-full h-full flex items-center justify-center bg-(--ui-primary)' }"
                            />
                        </UDropdownMenu>
                    </div>

                    <!-- TODO: Move the color mode in the settings page -->
                    <div>
                        <BaseColorModeButton />
                    </div>
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

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const query = ref('');

const router = useRouter()

const authStore = useAuthStore();
console.log(authStore.user)

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


const avatarMenuItems = ref<DropdownMenuItem[]>([
  {
    label: 'Profile',
    icon: 'i-lucide-user',
  },
//   {
//     label: 'Billing',
//     icon: 'i-lucide-credit-card'
//   },
  {
    label: 'Se déconnecter',
    icon: 'i-lucide-cog',
    color: 'error',
    onSelect: () => logout()
  }
])


</script>