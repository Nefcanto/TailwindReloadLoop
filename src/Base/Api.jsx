import axios from "axios"
import https from "https"
import getTenantDomain from "./GetTenantDomain"
import generateApiUrl from "./GenerateApiUrl"

const locales = [
    "zh",
    "es",
    "en",
    "hi",
    "pt",
    "bn",
    "ru",
    "ja",
    "vi",
    "tr",
    "ko",
    "fr",
    "ta",
    "ar",
    "de",
    "ur",
    "it",
    "fa",
]

const createAxiosApi = async () => {
    let apiUrl = globalThis.settings.ApiUrl

    // if (globalThis.settings.IsDeveloping) {
    //     const httpsAgent = new https.Agent({
    //         rejectUnauthorized: false,
    //     })
    //     axios.defaults.httpsAgent = httpsAgent
    // }

    globalThis.axiosApi = axios.create({
        baseURL: apiUrl
    })

    globalThis.axiosApi.interceptors.request.use(config => {
        config.headers["Accept"] = "application/json"
        config.headers["X-Client"] = "Qwik"
        let hostname = config.qwikRequestProps?.url?.hostname
        if (!config.qwikRequestProps || !hostname) {
            if (typeof document !== "undefined") {
                hostname = document.location.hostname
            }
        }
        const domain = getTenantDomain(hostname)
        const newParams = new URLSearchParams({
            ...config.params,
            domain,
        })
        let locale = config.qwikRequestProps?.query?.get("locale")
        if (!config.qwikRequestProps || !locale) {
            if (typeof document !== "undefined") {
                const parts = document.location.pathname.split('/')
                if (parts.length > 1) {
                    const secondPart = parts[1]
                    if (locales.includes(locale)) {
                        locale = secondPart
                    }
                }
            }
        }
        if (locale) {
            newParams.set("locale", locale)
        }
        newParams.sort()
        config.params = newParams
        const url = `${config.baseURL}${config.url}?${config.params.toString()}`
        return config
    })

    globalThis.axiosApi.interceptors.response.use(
        response =>
            response,
        error => {
            if (apiUrl === undefined) {
                throw "You have not defined the ApiUrl in settings"
            }
            if (error.response === undefined) {
                throw error.message ? error.toString() : "Unknown error"
            }
            if (error.response.status === 404) {
                console.log(error.response.data)
                if (error.response.data?.code === "404") {
                    throw error.response.data
                }
                else {
                    throw `404\nService does not exist\n${error.request.path}\n${apiUrl}`
                }
            }
            if (error.response.status === 400 || error.response.status === 500) {
                let messages = ""
                let data = error.response.data
                if (typeof data !== "string") {
                    for (let item in error.response.data) {
                        if (item.toLowerCase && item.toLowerCase() === "type") {
                            continue
                        }
                        if (Array.isArray(data[item])) {
                            for (let i = 0; i < data[item].length; i++) {
                                messages += data[item][i] + "\n"
                            }
                        }
                        else if (typeof data[item] === "object") {
                            console.log(data[item])
                        }
                        else {
                            messages += data[item] + "\n"
                        }
                    }
                }
                else {
                    messages = data
                }
                console.log(messages)
                throw messages
            }
        }
    )
}

export async function get(pathAndQuery, qwikRequestProps) {
    if (!globalThis.axiosApi) {
        await createAxiosApi()
    }
    const apiUrl = generateApiUrl(pathAndQuery, qwikRequestProps)
    const url = new URL(apiUrl)
    const params = {}
    url.searchParams.forEach((value, key) => params[key] = value)
    const start = new Date()
    return await globalThis.axiosApi
        .get(url.pathname, {
            params: params,
            crossDomain: true,
            qwikRequestProps
        })
        .then(response => {
            const end = new Date()
            console.log(`Took ${end - start} milliseconds for ${apiUrl}`)
            return response?.data
        })
        .catch(error => {
            if (error.error?.code === "404") {
                return {
                    apiUrl,
                    error,
                    statusCode: 404,
                }
            }
            return {
                apiUrl,
                error,
                statusCode: error?.response?.status ?? 500,
            }
        })
}

export async function post(pathAndQuery, data, qwikRequestProps) {
    if (!globalThis.axiosApi) {
        await createAxiosApi()
    }
    const apiUrl = generateApiUrl(pathAndQuery, qwikRequestProps)
    console.log(`Posting to ${apiUrl} ...`)
    console.log("Post request body:")
    console.dir(data)
    return await globalThis.axiosApi
        .post(
            pathAndQuery,
            data,
            {
                qwikRequestProps
            }
        )
        .then(response => response?.data)
}

export async function upload(pathAndQuery, data) {
    if (!globalThis.axiosApi) {
        await createAxiosApi()
    }
    return await globalThis.axiosApi
        .post(pathAndQuery, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then(response => response?.data)
        .catch(error => {
            throw error
        })
}

export async function getWithAuthentication(pathAndQuery, qwikRequestProps) {
    if (!globalThis.axiosApi) {
        await createAxiosApi()
    }
    const { sharedMap } = qwikRequestProps
    const session = sharedMap.get("session")
    const token = session?.user?.accessToken
    const apiUrl = generateApiUrl(pathAndQuery, qwikRequestProps)
    const url = new URL(apiUrl)
    const params = {}
    url.searchParams.forEach((value, key) => params[key] = value)
    const start = new Date()
    return await globalThis.axiosApi

        .get(url.pathname, {
            params: params,
            crossDomain: true,
            headers: {
                authorization: `Bearer ${token}`,
            },
            qwikRequestProps
        }).then(response => {
            const end = new Date()
            console.log(`Took ${end - start} milliseconds for ${generateApiUrl(pathAndQuery, qwikRequestProps)}`)
            return response?.data
        }).catch(error => {
            if (error.error?.code === "404") {
                return {
                    apiUrl,
                    error,
                    statusCode: 404,
                }
            }
            const checkForUnauthenticatedOrUnauthorizedAndSendToSingInPage = () => {

            }
            checkForUnauthenticatedOrUnauthorizedAndSendToSingInPage();
            return {
                apiUrl,
                error,
                statusCode: error?.response?.status ?? 500,
            }
        })
}

export async function postWithAuthentication(pathAndQuery, data, session) {
    if (!globalThis.axiosApi) {
        await createAxiosApi()
    }
    let token = session?.user?.accessToken
    if (!token) {
        token = session?.value?.user?.accessToken
    }

    return await globalThis.axiosApi
        .post(pathAndQuery, { ...data }, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
        .then(response => response?.data)
}
