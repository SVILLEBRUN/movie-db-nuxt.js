<template>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 w-full">
        <div class="mx-auto max-w-lg">
            <AppLogo svg-class="fill-(--ui-primary)" svg-height="70" svg-width="70" class="mx-auto hidden sm:block"></AppLogo>
            <AppLogo svg-class="fill-(--ui-primary)" svg-height="50" svg-width="50" class="mx-auto sm:hidden"></AppLogo>

            <h1 class="text-center text-2xl font-bold sm:text-3xl">Content de vous revoir &nbsp 🚀</h1>

            <div class="text-sm sm:text-base mt-6 mb-0 px-4 sm:px-6 lg:px-8">
                <UAlert
                    v-if="error.active"
                    class="mb-3"
                    color="error"
                    variant="subtle"
                    :title="error.message"
                    close
                    @update:open="(event) => { error.active = event }"
                /> 
                <UCard>
                    <UForm @submit="onSubmitLogin"  :state="credentials">
                        <p class="mx-auto mb-4 text-center text-dimmed">
                            Connectez-vous à votre compte Movies
                        </p>
                        <UFormField label="Email" name="email" class="mb-6" size="xl">
                            <UInput
                                v-model="credentials.email"
                                type="email" 
                                autofocus
                                size="xl"
                                class="w-full"
                            >
                                <template #trailing>
                                    <UIcon name="i-lucide-at-sign" color="neutral" class="text-muted"/>
                                </template>
                            </UInput>
                        </UFormField>
                        
                        <div class="space-y-2 mb-10">
                            <UFormField label="Mot de passe" name="password" size="xl">
                                <UInput
                                    v-model="credentials.password"
                                    :type="passwordVidible ? 'text' : 'password'"
                                    :ui="{ trailing: 'pe-1' }"
                                    class="w-full"
                                    size="xl"
                                >
                                    <template #trailing>
                                        <UButton
                                            color="neutral"
                                            variant="link"
                                            :icon="passwordVidible ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                                            :aria-label="passwordVidible ? 'Hide password' : 'Show password'"
                                            :aria-pressed="passwordVidible"
                                            aria-controls="password"
                                            @click="passwordVidible = !passwordVidible"
                                        />
                                    </template>
                                </UInput>
                                <template #hint>
                                    <ULink to="/password_reset" class="underline text-sm text-dimmed">Mot de passe oublié ?</ULink>
                                </template>
                            </UFormField>
                        </div>
                        <UButton type="submit" class="w-full flex items-center justify-center" size="lg" color="success"><div>Se connecter</div></UButton>
                    </UForm>
                    <p class="text-center text-sm text-dimmed mt-2">
                        Pas de compte ?
                        <ULink to="/register" class="underline">S'inscrire</ULink>
                    </p>
                </UCard>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'login',
    middleware: 'auth'
})

const passwordVidible = ref(false)

const { login } = useAuth();

const error = reactive({
    active: false,
    message: ''
})

const credentials = reactive({
    email: '' as string,
    password: '' as string
})

async function onSubmitLogin() {
    try {
        await login(credentials)
    } catch (err:any) {
        if(err.response?.status === 401) {
            error.message = 'Email ou mot de passe incorrect'
            error.active = true
        } else {
            error.message = 'Oups, une erreur est survenue. Veuillez réessayer plus tard'
            error.active = true
        }
    }
}

</script>