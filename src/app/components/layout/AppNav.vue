<script setup lang="ts">

    const { nav } = useMenuState()
    const { mobile, tablet } = useBreakpoints()

</script>

<template>
    <nav v-if="nav">
        <ul>
            <li>
                <NuxtLink to="/">{{ $t('link.home') }}</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/collections">{{ $t('link.collections') }}</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/products">{{ $t('link.products') }}</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">{{ $t('link.about') }}</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact">{{ $t('link.contact') }}</NuxtLink>
            </li>
        </ul>
        <AppActions v-if="mobile || tablet" />
    </nav>
</template>

<style lang="css" scoped>

nav {
    width: 90%;
    margin: 0 auto;
    padding: 0 2dvw;
    border-right: solid 1px var(--primary);
    border-left: solid 1px var(--primary);
    border-bottom: solid 1px var(--primary);
    background-color: var(--bg-primary);
}

ul {
    display: flex;
    flex-direction: column;
    gap: 1dvh;
}

li {
    height: 40px;
    font-size: var(--h3);
    font-weight: 600;
}

/* === Tablet === */

@media screen and (min-width: 768px) {
    nav {
        width: 70%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
    }
}

/* === Desktop === */

@media screen and (min-width: 1200px) {
    nav {
        padding: 2dvh;
        width: max-content;
    }
}

</style>
