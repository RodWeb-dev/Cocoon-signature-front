<script setup lang="ts">

    const { toggleCart, toggleUser } = useMenuState()
    const { mobile, tablet, desktop } = useBreakpoints()


</script>

<template>
    <div>
        <ul>
            <li>
                <button @click="toggleCart" :aria-label="$t('aria.modal_cart')">
                    <UIcon :size="mobile ? '44' : tablet ? '40' : '32'"
                    name="i-carbon-shopping-cart" color="primary" />
                </button>
            </li>
            <li>
                <button @click="toggleUser" :aria-label="$t('aria.modal_user')">
                    <UIcon :size="mobile ? '44' : tablet ? '40' : '32'"
                    name="i-carbon-user-avatar-filled-alt" color="primary" />
                </button>
            </li>
        </ul>
        <search>
            <UInput size="md" variant="outline" :placeholder="$t('placeholder.search')" name="filter" color="primary"/>
            <button type="submit">
                <UIcon :size="mobile ? '32' : tablet ? '30' : '28'"
                name="i-carbon-search-locate" color="primary" />
            </button>
        </search>
    </div>
</template>

<style lang="css" scoped>

    div {
        margin: 1dvh 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ul {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 50px
    }

    search {
        display: flex;
        align-items: center;
        gap: 1dvh;
    }
    
</style>
