import getLocale from "./GetLocale"

const isRtl = () => {
    const locale = getLocale()
    return locale?.isRtl ?? false
}

export default isRtl
