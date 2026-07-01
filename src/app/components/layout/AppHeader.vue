<script setup lang="ts">

    const { toggleNav, toggleCart, toggleUser } = useMenuState()
    const { mobile, tablet, desktop } = useBreakpoints()

</script>

<template>
    <header>
        <div class="wrapper">
            <button
                @click="toggleNav"
                :aria-label="$t('aria.main_nav')"
                >
                <UIcon :size="mobile ? '64' : tablet ? '56' : '48'" name="i-carbon-menu" />
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
        background: linear-gradient(var(--bg-primary), white);
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

</style>
