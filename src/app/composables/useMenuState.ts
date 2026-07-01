export const useMenuState = () => {

    const nav = useState<boolean>('nav', () => false)
    const cart = useState<boolean>('cart', () => false)
    const user = useState<boolean>('user', () => false)

    function toggleNav() {
        nav.value = !nav.value
    }

    function toggleCart() {
        cart.value = !cart.value
    }

    function toggleUser() {
        user.value = !user.value
    }

    return { nav, cart, user, toggleNav, toggleCart, toggleUser }
}
