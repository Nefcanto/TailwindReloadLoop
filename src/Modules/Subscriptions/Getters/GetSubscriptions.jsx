import { getWithAuthentication } from "Base"

const getSubscriptions = async props => {

    const { url } = props
    const { search } = url

    const result = await getWithAuthentication(`/subscriptions/data${search}`, props)

    return result

}

export default getSubscriptions
