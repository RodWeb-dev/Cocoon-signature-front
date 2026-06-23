export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    const baseURL = config.apiUrl as string
    const path = event.path

    const authorization = getHeader(event, 'Authorization')
    const contentType = getHeader(event, 'Content-Type')
    const cookie = getHeader(event, 'Cookie')

    const headers: Record<string, string> = {}
    if (authorization) headers['Authorization'] = authorization
    if (contentType) headers['Content-Type'] = contentType
    if (cookie) headers['Cookie'] = cookie

    let body = null
    if (event.method !== 'GET' && event.method !== 'DELETE') {
        body = await readBody(event)
    }

    const response = await $fetch.raw(path, {
        baseURL,
        method: event.method,
        headers,
        body,
    })

    const setCookies = response.headers.getSetCookie()
    for (const setCookie of setCookies) {
        appendResponseHeader(event, 'Set-Cookie', setCookie)
    }

    return response._data
})
