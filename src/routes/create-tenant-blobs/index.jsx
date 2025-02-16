import {
    generateApiUrl,
    get,
} from "Base"
import {
    writeFile,
    writeFileSync,
} from "fs"

const pathBlobs = {
    "colors": "dist/colors.css",
    "sitemap": "dist/sitemap.xml",
    "robots": "dist/robots.txt"
}

const createFiles = async requestEvent => {
    const {
        json,
        url,
    } = requestEvent
    const domain = url.searchParams.get("domain")
    const pathAndQuery = `/tenant/blobs?domain=${domain}`
    const apiUrl = generateApiUrl(pathAndQuery, requestEvent)
    console.log(`Getting blobs for ${apiUrl}`)
    const blobs = await get(pathAndQuery, requestEvent)

    if (blobs && blobs.map) {
        try {
            blobs.forEach(blob => {
                try {
                    switch (blob.key) {
                        case "favicon":
                            writeFile("dist/favicon.ico", blob.content || "", "base64", function (err) {
                                console.log(err)
                            })
                            break
                        default:
                            writeFileSync(pathBlobs[blob.key], blob?.relatedItems?.textualContent || "")
                    }
                } catch (error) {
                    console.log(`Error writing BLOB:\n`, blob)
                    throw error
                }
            })
            json(200, { status: "created succussFully" })
        } catch (error) {
            console.log(error)
            json(500, {
                apiUrl,
                error,
                status: `Could not write BLOB for ${domain}`,
            })
        }
    }
    else {
        console.log(error)
        json(500, {
            apiUrl,
            status: `Could not get BLOBs for ${domain}`,
        })
    }
}

export const onGet = async requestEvent => {
    await createFiles(requestEvent)
}

export const onPost = async requestEvent => {
    await createFiles(requestEvent)
}
