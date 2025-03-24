<template>
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <div class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
                src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                class="absolute inset-0 h-full w-full object-cover"
            />
        </div>

        <div class="flex items-center justify-center text-sm sm:text-base px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div class="max-w-xl lg:max-w-3xl w-full">
                <AppLogo svg-class="fill-(--ui-primary)" svg-height="70" svg-width="70" class="hidden sm:block"></AppLogo>
                <AppLogo svg-class="fill-(--ui-primary)" svg-height="50" svg-width="50" class="sm:hidden"></AppLogo>
                <h1 class="text-2xl font-bold sm:text-3xl md:text-4xl mt-1">Bienvenue sur Movies 🚀</h1>

                <p class="mt-4 mb-4 text-dimmed">Inscrivez-vous pour obtenir un compte</p>

                <UAlert
                    v-if="error.active"
                    class="mb-4"
                    color="error"
                    variant="subtle"
                    :title="error.message"
                    :actions=" error.status === 409 ? [{
                        label: 'se connecter',
                        color: 'error',
                        variant: 'subtle',
                        class: 'cursor-pointer',
                        onClick: () => { navigateTo('/login') }
                    }] : []"
                    orientation="horizontal"
                    close
                    @update:open="(event:boolean) => { error.active = event }"
                />

                <div class="text-center" style="color-scheme: auto;">
                    <GoogleSignInButton
                        @success="handleGoogleLoginSuccess"
                        @error="handleGoogleLoginError"
                    ></GoogleSignInButton>
                </div>


                <UForm @submit="onSubmitRegister" :schema="schema" :state="user_data" class="grid mt-4 grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                        <UFormField label="Prénom" name="first_name" required size="xl">
                            <UInput
                                    v-model="user_data.first_name"
                                    type="text" 
                                    autofocus
                                    size="xl"
                                    class="w-full"
                                    required
                                >
                            </UInput>
                        </UFormField>

                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <UFormField label="Nom" name="last_name" required size="xl">
                            <UInput
                                v-model="user_data.last_name"
                                type="text"
                                size="xl"
                                class="w-full"
                                required
                            >
                            </UInput>
                        </UFormField>
                    </div>

                    <div class="col-span-6">
                        <UFormField label="Email" name="email" required size="xl">
                            <UInput
                                v-model="user_data.email"
                                type="email"
                                size="xl"
                                class="w-full"
                                required
                            >
                            </UInput>
                        </UFormField>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <UFormField label="Mot de passe" name="password" required size="xl">
                            <UInput
                                v-model="user_data.password"
                                :type="passwordVidible ? 'text' : 'password'"
                                :color="color"
                                :aria-invalid="score < 4"
                                aria-describedby="password-strength"
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
                            <UProgress
                                :color="color"
                                :indicator="text"
                                :model-value="score"
                                :max="4"
                                size="sm"
                                class="mt-1"
                            />
                            <p id="password-strength" class="text-sm font-medium text-dimmed">
                                {{ text }}. Must contain:
                            </p>
                            <ul class="space-y-1" aria-label="Password requirements">
                                <li
                                    v-for="(req, index) in strength"
                                    :key="index"
                                    class="flex items-center gap-0.5"
                                    :class="req.met ? 'text-(--ui-success)' : 'text-(--ui-text-muted)'"
                                >
                                    <UIcon :name="req.met ? 'i-lucide-circle-check' : 'i-lucide-circle-x'" class="size-4 shrink-0" />

                                    <span class="text-xs font-light">
                                        {{ req.text }}
                                        <span class="sr-only">
                                            {{ req.met ? ' - Requirement met' : ' - Requirement not met' }}
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </UFormField>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <UFormField label="Confirmer le mot de passe" name="password_confirmation" required class="mb-6" size="xl">
                            <UInput
                                v-model="user_data.password_confirmation"
                                type="password"
                                size="xl"
                                class="w-full"
                                required
                            >
                            </UInput>
                        </UFormField>
                    </div>

                    <div class="col-span-6">
                        <p class="text-xs sm:text-sm text-dimmed">
                            En créant un compte, vous acceptez
                            <a href="#" class="text-toned underline"> nos conditions générales </a>
                            et
                            <a href="#" class="text-toned underline">notre politique de confidentialité</a>.
                        </p>
                    </div>

                    <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <UButton type="submit" class="flex items-center justify-center px-8" size="xl" color="success"><div>Créer un compte</div></UButton>
            
                        <p class="mt-4 text-sm sm:mt-0 text-dimmed">
                            Vous avez deja un compte?
                            <a href="/login" class="text-toned underline">Se connecter</a>.
                        </p>
                    </div>
                </UForm>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import type { User } from '~/types'
import type { CredentialResponse } from "vue3-google-signin";

definePageMeta({
    layout: 'login',
    middleware: 'auth'
})

const passwordVidible = ref(false)

const schema = z.object({
    first_name: z.string().min(1, { message: 'Le prenom est obligatoire' }),
    last_name: z.string().min(1, { message: 'Le nom est obligatoire' }),
    email: z.string().email({ message: 'L\'email n\'est pas valide' }),
    password: z.string()
        .min(8, { message: ' ' })
        .regex(/[0-9]/, { message: ' ' })
        .regex(/[a-z]/, { message: ' ' })
        .regex(/[A-Z]/, { message: ' ' }),
    password_confirmation: z.string()
}).refine((data) => data.password === data.password_confirmation, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['password_confirmation']
})

type Schema = z.output<typeof schema>

const user_data = reactive<Partial<Schema>>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const error = reactive({
    active: false,
    status: 0,
    message: ''
})

const { register, google_register } = useAuth();

async function onSubmitRegister(event: FormSubmitEvent<Schema>) {
    try {
        const user:User = {
            first_name: user_data.first_name as string,
            last_name: user_data.last_name as string,
            email: user_data.email as string,
            password: user_data.password as string
        }

        await register(user)
    } catch (err:any) {
        loginErrors(err)
    }  
}


async function handleGoogleLoginSuccess(response:CredentialResponse) {
    try {
        const { credential } = response;
        if(!credential) return
        await google_register(credential)
    } catch(err:any) {
        loginErrors(err)
    }
}


function handleGoogleLoginError(err:any) {
    console.log(err)
    loginErrors({})
}

function loginErrors (err:any) {
    if(err.response?.status === 409) {
        error.message = 'Un compte existe deja avec cette adresse email'
        error.status = 409
        error.active = true
    } else {
        error.message = 'Oups, une erreur est survenue. Veuillez réessayer plus tard'
        error.status = 0
        error.active = true
    }
}


function checkStrength(str: string | undefined) {
    if (!str) str = ''
    const requirements = [
        { regex: /.{8,}/, text: 'At least 8 characters' },
        { regex: /\d/, text: 'At least 1 number' },
        { regex: /^(?=.*[a-z])(?=.*[A-Z]).*$/, text: 'At least 1 lowercase letter and 1 uppercase letter' },
        { regex: /^(?=.*[^\w\d]).*$/, text: 'At least 1 special character' }
    ]

    return requirements.map(req => ({ met: req.regex.test(str), text: req.text }))
}

const strength = computed(() => checkStrength(user_data.password))
const score = computed(() => strength.value.filter(req => req.met).length)

const color = computed(() => {
    if (score.value === 0) return 'neutral'
    if (score.value <= 1) return 'error'
    if (score.value <= 2) return 'warning'
    if (score.value === 3) return 'warning'
    return 'success'
})

const text = computed(() => {
    if (score.value === 0) return 'Enter a password'
    if (score.value <= 2) return 'Weak password'
    if (score.value === 3) return 'Medium password'
    return 'Strong password'
})

</script>