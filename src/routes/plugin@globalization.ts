// @ts-nocheck

import { getFromCacheOrApi } from "Base"

export const onRequest = async (props: any) => {
    const {
        query,
        locale,
    } = props
    const globalizationData = await getFromCacheOrApi(`/globalization/data`, props)
    const incomingLocale = query?.get("locale")
    let currentLocale = globalizationData?.locales?.find((i: any) => i.key == incomingLocale)
    if (!currentLocale) {
        currentLocale = globalizationData?.locale
    }

    locale(currentLocale?.key);
}
