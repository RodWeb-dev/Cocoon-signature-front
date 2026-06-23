export const useApi = () => {
    const config = useRuntimeConfig()
    const accessToken = useState<string | null>('auth_token', () => null)

    const baseURL = import.meta.server
        ? (config.apiUrl as string)
        : '/api'

    const $api = $fetch.create({
        baseURL,
        onRequest({ options }) {
            if (accessToken.value) {
                options.headers = new Headers()
                options.headers.set('Authorization', `Bearer ${accessToken.value}`)
            }
        },
        onResponseError({ response }) {
            if (response.status === 401) {
                accessToken.value = null
            }
        },
    })

    return { $api, accessToken }
}
