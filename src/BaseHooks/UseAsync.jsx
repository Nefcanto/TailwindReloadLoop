// todo: https://stackoverflow.com/questions/76669474/is-it-possible-to-not-be-dependent-on-the-array-index-in-promise-all

const useAsync = async (requests) => {
    const resolvedRequests = await Promise.all(requests)
    return resolvedRequests
}

export default useAsync
