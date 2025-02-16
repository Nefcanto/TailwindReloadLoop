import { useLocation } from "@builder.io/qwik-city"

const useQuery = (searchKey) => {

    const { url } = useLocation()
    const searchParams = new URLSearchParams(url.search)

    let returnValue
    if (searchKey) {

        if (searchParams.has(searchKey)) {

            const searchValue = searchParams.get(searchKey)
            returnValue = searchValue
        } else {
            returnValue = `${searchKey} not exist in url search params`
        }
    }
    else {
        returnValue = Object.fromEntries(searchParams.entries())

    }

    return returnValue
}

export default useQuery
