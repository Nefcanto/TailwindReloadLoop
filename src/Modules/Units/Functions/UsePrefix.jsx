const usePrefix = entity => {

    return {
        siName: entity?.unitsPrefixSiName ?? "",
        commonName: entity?.unitsPrefixCommonName ?? "",
        magnitude: entity?.unitsPrefixMagnitude ?? ""
    }
}

export default usePrefix
