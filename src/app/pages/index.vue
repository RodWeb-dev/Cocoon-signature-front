<script setup lang="ts">

    const { t } = useI18n()

    useSeoMeta({
        title: t('pages.home.seo-title'),
        description: t('pages.home.seo-description'),
        ogTitle: t('pages.home.seo-title'),
        ogDescription: t('pages.home.seo-description'),
        ogUrl: 'www.cocoon-signature.fr',
        ogImage: 'www.cocoon-signature.fr/img/og-home.webp'
    })

    const { setWebsite } = useJsonLd()

    setWebsite()

</script>

<template>
    <main>
        <section>
            <h1>{{ $t('pages.home.h1') }}</h1>

        </section>
    </main>
</template>
