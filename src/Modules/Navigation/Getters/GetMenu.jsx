import { getFromCacheOrApi } from "Base"

const getMenu = async props => {
    const data = await getFromCacheOrApi(`/menu/data`, props)
    return data
}

export default getMenu
