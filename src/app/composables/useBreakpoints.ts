export const useBreakpoints = () => {

    const mobile = useState<boolean>('mobile', () => true)
    const tablet = useState<boolean>('tablet', () => false)
    const desktop = useState<boolean>('desktop', () => false)

    onMounted(() => {
        const update = () => {

            if (!globalThis.matchMedia) return

            if (globalThis.matchMedia?.('(max-width: 767px)').matches) {
                mobile.value = true
                tablet.value = false
                desktop.value = false
            } else if (globalThis.matchMedia?.('(min-width: 768px)').matches && globalThis.matchMedia?.('(max-width: 1199px)').matches) {
                mobile.value = false
                tablet.value = true
                desktop.value = false
            } else {
                mobile.value = false
                tablet.value = false
                desktop.value = true
            }
        }
        update()
        window.addEventListener('resize', update)
        onUnmounted(() => window.removeEventListener('resize', update))
    })

    return { mobile, tablet, desktop }
}
