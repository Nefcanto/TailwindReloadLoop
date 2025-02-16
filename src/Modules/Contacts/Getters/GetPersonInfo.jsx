import { getWithAuthentication } from "Base"

const getPersonInfo = async props => {
    const result = await getWithAuthentication("/person/get", props)
    return result
}

export default getPersonInfo
