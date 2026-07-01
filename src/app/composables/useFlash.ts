export const useFlash = () => {

    type FlashMessage = {
        type: 'success' | 'warning' | 'error',
        message: string
    }

    const flash = useState<FlashMessage | null>('flash', () => null)

    function setFlash(type: 'success' | 'warning' | 'error', message: string
    ) {
        flash.value = { type, message }
    }

    return { flash, setFlash }
}
