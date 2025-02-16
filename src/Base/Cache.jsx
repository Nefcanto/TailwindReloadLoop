// import crypto from "crypto"
import { get } from "Base"
import generateApiUrl from "./GenerateApiUrl"

globalThis.cache = {}

const createHandle = async url => {
    let handle = url.replace(/\//ig, "_")
    handle = encodeURI(handle)
    const encoder = new TextEncoder()
    const data = encoder.encode(handle)

    if (typeof crypto !== "undefined" && crypto.subtle) {
        const hashBuffer = await crypto.subtle.digest("SHA-256", data)
        handle = Array.from(new Uint8Array(hashBuffer))
            .map(b => b.toString(16).padStart(2, "0"))
            .join("")
        return handle
    } else {
        const { createHash } = await import("node:crypto")
        handle = createHash("md5").update(handle).digest("hex")
        return handle
    }
}

const getFromCacheOrApi = async (path, qwikRequestProps) => {
    const start = new Date()
    const url = generateApiUrl(path, qwikRequestProps)
    const handle = await createHandle(url)
    if (globalThis.cache?.[handle]) {
        console.log(`Getting ${url} from cache ...`)
        const data = globalThis.cache[handle]
        const end = new Date()
        console.log(`Took ${end - start} milliseconds`)
        return JSON.parse(data)
    }
    console.log(`Getting ${url} from API ...`)
    const data = await get(path, qwikRequestProps)
    const { statusCode } = data || {}
    if (!data || statusCode) {
        console.log(`Not caching because server returned ${statusCode}\nURL: ${url}\n${JSON.stringify(data)}`)
        return data
    }
    globalThis.cache[handle] = JSON.stringify(data)
    const end = new Date()
    console.log(`Took ${end - start} milliseconds`)
    return data
}

const clearCache = () => {
    console.log("Clearing cache ...")
    globalThis.cache = {}
    console.log("Cleared the cache")
}

export { getFromCacheOrApi }
export { clearCache }
