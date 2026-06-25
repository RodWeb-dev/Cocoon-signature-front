<script setup lang="ts">

    import type { FormSubmitEvent } from '@nuxt/ui'
    import { FetchError } from 'ofetch'

    const { setFlash } = useFlash()
    const { t } = useI18n()
    const { $api } = useApi()
    const state = reactive({
        email: '',
        accept: false
    })

    async function onSubmit(event: FormSubmitEvent<typeof state>) {
        if (!state.accept) {
            setFlash('warning', t('newsletter.accept_error'))
            return
        }
        try {
            const response = await $api<ApiResponse>('/newsletter', {
                method: 'POST',
                body: { email: state.email }
            })

            state.email = ''
            state.accept = false

            setFlash('success', t(response.message!.key))

        } catch(error) {
            if (error instanceof FetchError)
            setFlash('error', t(error.data.error.key ?? 'api.error'))
        }
    }
</script>

<template>
    <div>
        <p>{{ $t('newsletter.hook') }}</p>
        <UForm :state="state" class="" @submit="onSubmit">
      
            <div class="form">
                <UCheckbox v-model="state.accept" name="accept" required color="secondary" />
                
                <i18n-t keypath="newsletter.rgpd" tag="small">
                    <template #cgu>
                        <NuxtLink to="/mentions-legales#conditions-d-utilisation">{{ $t('link.cgu') }}</NuxtLink>
                    </template>
                    <template #privacy>
                        <NuxtLink to="/politique-de-confidentialite">{{ $t('link.pc') }}</NuxtLink>
                    </template>
                </i18n-t>
            </div>

            <div class="form">
                <UInput v-model="state.email" :placeholder="$t('placeholder.email')"
                color="primary" variant="subtle" required name="email" />
                
                <UButton type="submit" variant="solid" color="secondary">
                    {{ $t('newsletter.submit') }}
                </UButton>
            </div>
        </UForm>        
    </div>
</template>

<style lang="css" scoped>
    p {
        font-family: var(--interface);
        line-height: 1.1rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }

    .form {
        display: flex;
        align-items: center;
    }

    small {
        font-size: 0.5rem;
    }

    button {
        width: min-content;
        height: min-content;
    }

    @media screen and (min-width: 1200px) {
        form {
            gap: 2dvh;
        }

        .form {
            gap: 0.5dvw;
        }

        small {
            font-size: 0.8rem;
        }
    }

</style>
