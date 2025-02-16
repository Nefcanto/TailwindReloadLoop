const useMappingSettings = (settings) => {

    let mappedSettings = {}
    settings?.forEach(i => mappedSettings[i.relatedItems.keySegment] = i.value)

    return mappedSettings
}

export default useMappingSettings
