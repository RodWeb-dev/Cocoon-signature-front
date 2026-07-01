<script setup lang="ts">

    import type { FormSubmitEvent } from '@nuxt/ui'
    import { FetchError } from 'ofetch'
    import { z } from 'zod'

    const { setFlash } = useFlash()
    const { t } = useI18n()
    const { $api } = useApi()

    const schema = z.object({
        email: z.email({ error: t('z.email')}),
        accept: z.boolean({ error: t('newsletter.accept_error')}).parse(true)
    })

    type Schema = z.output<typeof schema>

    const state = reactive<Schema>({
        email: '',
        accept: false
    })

    async function onSubmit(event: FormSubmitEvent<Schema>) {
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
        <UForm :schema="schema" :state="state" class="" @submit="onSubmit">
      
            <div class="form">
                <UCheckbox v-model="state.accept" name="accept" color="primary" />
                
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
                color="primary" variant="subtle" name="email" />
                
                <UButton type="submit" variant="solid" color="primary">
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
        margin: 1dvh 0;
        gap: 1dvh;
    }

    .form {
        display: flex;
        align-items: center;
    }

    small {
        font-size: 0.5rem;
        margin-left: 3vw;
    }

    button {
        width: min-content;
        height: min-content;
    }

    @media screen and (min-width: 1200px) {
        form {
            gap: 1dvh;
        }

        .form {
            gap: 0.5dvw;
        }

        small {
            font-size: 0.6rem;
            line-height: 0.8rem;
            margin-left: 0;
        }
    }

</style>
