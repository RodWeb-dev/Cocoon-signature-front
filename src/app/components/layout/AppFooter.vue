<script setup lang="ts">

    const { mobile } = useBreakpoints()

</script>

<template>
    <footer>
        <div class="wrapper">
            <AppNewsletter />
            <hr v-if="mobile">
            <BrandContact />
            <hr v-if="mobile">
            <div id="identity">
                <ul>
                    <li>
                        <NuxtLink to="/about#identite">{{ $t('link.identite') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about#philosophie">{{ $t('link.philo') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about#ressources">{{ $t('link.ressource') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about#partenaires">{{ $t('link.partenaire') }}</NuxtLink>
                    </li>
                </ul>
            </div>
            <hr v-if="mobile">
            <div id="legal">
                <ul>
                    <li>
                        <NuxtLink to="/mentions-legales">{{ $t('link.ml') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/conditions-generales-de-vente">{{ $t('link.cgv') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/politique-de-confidentialite">{{ $t('link.pc') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/gestion-des-cookies">{{ $t('link.cookie') }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style lang="css" scoped>

    footer {
        width: 100dvw;
        height: min-content;
        flex: none;
        background-color: linear-gradient(var(--bg-secondary), var(--bg-tertiary));
    }
    .wrapper {
        border-top: solid 1px var(--primary);
        display: grid;
        grid-template-columns: 1fr;
        gap: 2vh;
        padding-top: 2dvh;
        margin-bottom: 2vh;
    }

    #identity {
        display: flex;
        flex-direction: column;
    }

    #legal {
        display: flex;
        flex-direction: column;
    }

    /* === Tablet === */

    @media screen and (min-width: 768px) {
        .wrapper {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: auto;
        }
    }

    /* === Desktop === */

    @media screen and (min-width: 1200px) {
        .wrapper {
            grid-template-columns: repeat(4, 1fr);
        }
    }

</style>
