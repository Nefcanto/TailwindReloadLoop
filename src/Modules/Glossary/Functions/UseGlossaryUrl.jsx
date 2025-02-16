const useGlossaryUrl = localePathPrefix => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }
    return `${localePathPrefix}/glossary`
}

export default useGlossaryUrl
