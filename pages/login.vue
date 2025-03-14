<template>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 w-full">
        <div class="mx-auto max-w-lg">
            <AppLogo svg-class="fill-(--ui-primary)" svg-height="70" svg-width="70" class="mx-auto"></AppLogo>
            <h1 class="text-center text-2xl font-bold text-gray-800 sm:text-3xl">Content de vous revoir 🚀</h1>

            <form @submit.prevent="handleLogin()" class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 text-gray-700">
                <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Connectez-vous à votre compte Movies
                </p>
                <div>
                    <div class="font-semibold text-sm">Email</div>

                    <div class="relative">
                        <BaseInput 
                            v-model="email"
                            type="email" 
                            icon="ic:baseline-alternate-email" 
                            :icon-size="15"
                            input-class="w-full rounded-lg border-gray-200 border px-4 py-3 text-sm"
                            required
                            autofocus
                        />
                    </div>
                </div>

                <div>
                    <div class="font-semibold text-sm">Mot de passe</div>

                    <div class="relative">
                        <BaseInput
                            v-model="password"
                            :type="passwordVidible ? 'text' : 'password'"
                            input-class="w-full rounded-lg border-gray-200 border px-4 py-3 text-sm"
                            required
                        >
                            <template #icon>
                                <Icon 
                                    @click="passwordVidible = !passwordVidible"
                                    :name="passwordVidible ? 'eva:eye-off-outline' : 'eva:eye-outline'" 
                                    size="17" 
                                    class="cursor-pointer"
                                />
                            </template>
                        </BaseInput>
                    </div>
                </div>

                <button
                    type="submit"
                    class="inline-block shrink-0 rounded-md border bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                >
                    Se connecter
                </button>

                <p class="text-center text-sm text-gray-500">
                    Pas de compte ?
                    <NuxtLink class="underline" href="/register" >S'inscrire</NuxtLink>
                </p>
            </form>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'login',
    middleware: 'auth'
})

const passwordVidible = ref(false)

const password = ref('')
const email = ref('')

const credentials = computed(() => {
    return {
        email: email.value,
        password: password.value
    }
})

const { login } = useAuth();

const handleLogin = async () => {
    try {
        await login(credentials.value)
    } catch (err) {
        if(err.response?.status === 401) {
            // TODO: Handle email already exists
            // Display errors in the form and alert 
        } else {
            // TODO: Handle other errors 
            // Display errors in alert like : "Sorry, something went wrong please try again later"
        }
    }
}


</script>