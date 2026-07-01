<script setup lang="ts">

    const {flash} = useFlash()
    let timeout: ReturnType<typeof setTimeout>

    watch(flash, () => {
        clearTimeout(timeout)
        if(flash.value) {
            timeout = setTimeout(() => closeFlash(), 5000)
        }
    })

    function closeFlash() {
        flash.value = null
        clearTimeout(timeout)
    }

</script>

<template>
    <div v-if="flash">
        <div>
            <p>{{ flash.type }}</p>
            <UIcon @click="closeFlash" name="i-carbon-close-filled" />
        </div>
        <p>{{ flash.message }}</p>
    </div>
</template>
