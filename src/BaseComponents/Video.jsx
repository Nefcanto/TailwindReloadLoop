import { component$ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import {
    getTenantDomain,
    merge,
} from "Base"

const Video = component$(({
    containerClass,
    link,
    videoClass,
    poster,
    ...rest
}) => {

    const { url } = useLocation()
    const domain = getTenantDomain(url.hostname)
    const posterUrl = poster && `${poster}?domain=${domain}`
    const videoUrl = link && `${link}?domain=${domain}`

    const extraParams = {}
    if (poster) {
        extraParams.poster = posterUrl
    }

    return <div class={containerClass}>
        <video
            class={merge("w-full object-cover", videoClass)}
            {...rest}
            {...extraParams}
        >
            <source src={videoUrl} type="video/mp4"></source>
        </video>
    </div>
})

export default Video
