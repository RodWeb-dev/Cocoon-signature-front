<script setup lang="ts">

    const { toggleCart, toggleUser } = useMenuState()


</script>

<template>
    <div>
        <ul>
            <li>
                <button @click="toggleCart" :aria-label="$t('aria.modal_cart')">
                    <UIcon size="44" name="i-carbon-shopping-cart" />
                </button>
            </li>
            <li>
                <button @click="toggleUser" :aria-label="$t('aria.modal_user')">
                    <UIcon size="44" name="i-carbon-user-avatar-filled-alt" />
                </button>
            </li>
        </ul>
        <search>
            <UInput size="md" variant="outline" :placeholder="$t('placeholder.search')" name="filter" color="primary"/>
            <button type="submit">
                <UIcon size="32" name="i-carbon-search-locate" />
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
