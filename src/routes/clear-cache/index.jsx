import {
    chmodSync,
    mkdirSync,
    rmSync,
} from "fs"
import { clearCache } from "Base"

const clear = (requestEvent, shouldRedirect) => {

    try {
        clearCache()
        const nginxCacheDir = "/NginxCache/Cache"
        console.log("Removing the Nginx cache directory ...")
        rmSync(nginxCacheDir, { recursive: true, force: true })
        console.log("Recreating the Nginx cache directory ...")
        mkdirSync(nginxCacheDir);
        chmodSync(nginxCacheDir, 0o777);

        requestEvent.json(
            200,
            {
                status: "Successful",
                message: "Cache is cleared!"
            }
        )
    } catch (e) {
        requestEvent.json(
            500,
            {
                status: "Failed",
                message: "An error occurred!"
            }
        )
    }
}

export const onGet = async requestEvent => {
    clear(requestEvent, true)
}

export const onPost = async requestEvent => {
    clear(requestEvent)
}
