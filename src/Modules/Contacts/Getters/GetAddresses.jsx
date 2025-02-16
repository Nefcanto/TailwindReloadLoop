import { getWithAuthentication } from "Base"

const getAddresses = async props => {
    const result = await getWithAuthentication("/address/all", props)
    return result

}

export default getAddresses
