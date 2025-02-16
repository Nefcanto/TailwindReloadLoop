const getSession = loaderProps => {
    const { sharedMap } = loaderProps
    return sharedMap?.get("session")
}

export default getSession
