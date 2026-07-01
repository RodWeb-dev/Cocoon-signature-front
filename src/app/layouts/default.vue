<script setup lang="ts">

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Cocoon-Signature",
                "url": "https://www.cocoon-signature.fr",
                "logo": "https://www.cocoon-signature.fr/img/logo.webp",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "email": "contact@cocoon-signature.com"
                },
                "sameAs": [
                    "https://www.instagram.com/mobilier.cocoon",
                    "https://www.facebook.com/people/Cocoon-mobilier/61577748553609/",
                    "https://www.linkedin.com/company/cocoon-mobilier-int%C3%A9rieur-et-ext%C3%A9rieur-bois/"
                ]
            })
        }
    ]
})

useSeoMeta({
    ogType: 'website',
    ogLocale: 'fr_FR',
    ogSiteName: 'Cocoon-Signature'
})

</script>

<template>
    <div class="layout">
        <AppHeader />
        <div class="main wrapper">
            <AppNav />
            <FlashMessage />
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<style lang="css" scoped>

    .layout {
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

</style>
