<script setup lang="ts">
    import type { FormSubmitEvent } from '@nuxt/ui'
    import { FetchError } from 'ofetch'
    import { z } from 'zod'

    const { setFlash } = useFlash()
    const { t } = useI18n()
    const { $api } = useApi()

    useSeoMeta({
        title: t('pages.contact.seo-title'),
        description: t('pages.contact.seo-description'),
        ogTitle: t('pages.contact.seo-title'),
        ogDescription: t('pages.contact.seo-description'),
        ogUrl: 'https://www.cocoon-signature.fr/contact/',
        ogImage: 'https://www.cocoon-signature.fr/img/og-contact.webp'
    })

    const schema = z.object({
        fullName: z.string().min(2,{ error: t('z.required')}),
        email: z.email({ error: t('z.email') }),
        subject: z.string().min(3,{ error: t('z.required')}),
        content: z.string().min(10,{ error: t('z.required')})
    })

    type Schema = z.output<typeof schema>

    const form = reactive<Schema>({
        fullName: '',
        email: '',
        subject: '',
        content: ''
    })

    async function onSubmit(event:FormSubmitEvent<Schema>) {
        try {
            const response = await $api<ApiResponse>('/contact', {
                method: 'POST',
                body: {
                    fullName: form.fullName,
                    email: form.email,
                    subject: form.subject,
                    content: form.content
                }
            })

            Object.assign(form, { fullName: '', email: '', subject: '', content: '' })

            setFlash('success', t(response.message!.key))

        } catch(error) {
            if (error instanceof FetchError)
            setFlash('error', t(error.data.error.key ?? 'api.error'))
        }
    }

</script>

<template>
    <main>
        <h1>{{ $t('pages.contact.h1') }}</h1>
        <section>
            <h2>{{ $t('pages.contact.rdv-h2') }}</h2>
            <p>{{ $t('pages.contact.rdv-p') }}</p>
            <UButton color="primary" icon="i-carbon-calendar-add-alt" :aria-label="$t('aria.cal-com')" variant="solid" size="xl">
            {{ $t('pages.contact.rdv-b') }}</UButton>
        </section>

        <section>
            <h2>{{ $t('pages.contact.form-h2') }}</h2>
            <p>{{ $t('pages.contact.form-p') }}</p>
            <UForm :schema="schema" :state="form" @submit="onSubmit" color="primary">
                <UFormField name="fullName" :label="$t('label.fullname')">
                    <UInput v-model="form.fullName" variant="subtle" />
                </UFormField>
                <UFormField name="email" :label="$t('label.email')">
                    <UInput v-model="form.email" variant="subtle" />
                </UFormField>
                <UFormField name="subject" :label="$t('label.subject')">
                    <UInput v-model="form.subject" variant="subtle" />
                </UFormField>
                <UFormField name="content" :label="$t('label.content')">
                    <UTextarea v-model="form.content" variant="subtle" />
                </UFormField>
                <UButton type="submit" color="primary" variant="subtle">{{ $t('pages.contact.form-submit') }}</UButton>
            </UForm>
        </section>

    </main>
</template>

<style lang="css" scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2dvh;
        text-align: center;
        margin-bottom: 3dvh;
    }

    p {
        margin: 1dvh;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2dvh;
    }
</style>
