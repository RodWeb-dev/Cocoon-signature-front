<script setup lang="ts">
</script>

<template>
    <section>
        <p>{{ $t('brand.hook') }}</p>

        <div>
            <a rel="noreferrer" target="_blank" title="Instagram"
            href="https://www.instagram.com/mobilier.cocoon">
            <UIcon size="30" name="i-carbon-logo-instagram" /></a>
            <a rel="noreferrer" target="_blank" title="Linkedin"
            href="https://www.linkedin.com/company/cocoon-mobilier-int%C3%A9rieur-et-ext%C3%A9rieur-bois/">
            <UIcon size="30" name="i-carbon-logo-linkedin" /></a>
            <a rel="noreferrer" target="_blank" title="Facebook"
            href="https://www.facebook.com/people/Cocoon-mobilier/61577748553609/">
            <UIcon size="30" name="i-carbon-logo-facebook" /></a>
        </div>
    
        <p>{{ $t('brand.coordonnees') }}</p>

        <address>
            <a rel="noreferrer" target="_blank"
            href="https://www.google.fr/maps/place/Cocoon+%7C+Meuble+%26+Abat-jour+-+Artisan+Cr%C3%A9ateur+Fabricant/@45.6072074,4.065715,558m/data=!3m1!1e3!4m15!1m8!3m7!1s0x47f4315ec5cbd58b:0x5219341a93c76f46!2s24+Rue+Simon+Boyer,+42600+Montbrison!3b1!8m2!3d45.6073265!4d4.0667906!16s%2Fg%2F11nnkqwycr!3m5!1s0x47f431ded74869cd:0x2020ea7ed8debe34!8m2!3d45.6073265!4d4.0667906!16s%2Fg%2F11vlz3zkbs?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D">
            <UIcon size="20" name="i-carbon-location-filled" /> 24 rue Simon Boyer, Montbrison</a>
        
            <a href="mailto:contact@cocoon-signature.com"><UIcon size="20" name="i-carbon-email" /> contact@cocoon-signature.com</a>
        
            <a href="tel:+33699914280"><UIcon size="20" name="i-carbon-phone-filled" /> +33 6 99 91 42 80</a>
        </address>
    </section>
</template>

<style lang="css" scoped>

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1dvh;
        padding: 0 1dvw;
    }

    p {
        font-family: var(--interface);
        line-height: 1.1rem;
    }

    div {
        width: 60%;
        display: flex;
        justify-content: space-between;
    }

    address {
        display: flex;
        flex-direction: column;
        gap: 1dvh;
    }

    span {
        vertical-align: text-bottom;
    }
</style>
