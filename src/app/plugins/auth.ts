export default defineNuxtPlugin({
    name: 'auth',
    enforce: 'pre',
    async setup() {

        if (import.meta.client) return

        const config = useRuntimeConfig()
        const baseURL = config.apiUrl as string
        const headers = useRequestHeaders(['cookie'])
        const accessToken = useState<string | null>('auth_token', () => null)

        if (!headers.cookie) return

        try {
            const response = await $fetch<{ data: { access_token: string } }>(
                '/auth/refresh',
                {
                    baseURL,
                    method: 'POST',
                    headers: { cookie: headers.cookie },
                }
            )
            accessToken.value = response.data.access_token
        } catch {
            accessToken.value = null
        }
    },
})
