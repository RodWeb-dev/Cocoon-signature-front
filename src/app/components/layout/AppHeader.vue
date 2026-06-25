<script setup lang="ts">

    const { toggleNav, toggleCart, toggleUser } = useMenuState()
    const { desktop } = useBreakpoints()

</script>

<template>
    <header>
        <div class="wrapper">
            <button
                @click="toggleNav"
                :aria-label="$t('aria.main_nav')"
                >
                <UIcon size="64" name="i-carbon-menu" />
            </button>
            <NuxtLink to="/">
                <picture>
                    <img src="/img/logo.webp" :alt=" $t('alt.logo') " width="480" height="144"/>
                </picture>
            </NuxtLink>
            <AppActions v-if="desktop" />
        </div>
    </header>
</template>

<style lang="css" scoped>

    header {
        background-color: linear-gradient(var(--bg-tertiary), var(--bg-secondary));
        width: 100%;
        height: min-content;
        flex: none;
        position: sticky;
    }
    .wrapper {
        border-bottom: solid 1px var(--primary);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button {
        color: var(--primary);
    }

    /* === Tablet === */

    @media screen and (min-width: 768px) {
        .wrapper {
            width: 90%;
        }
    }

    /* === Desktop === */

    @media screen and (min-width: 1200px) {
        .wrapper {
            width: clamp(960px, 80dvw, 1500px);
        }
    }
</style>
