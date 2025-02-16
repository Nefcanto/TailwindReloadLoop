import { getWithAuthentication } from "Base"

const getPayment = async props => {
    const data = await getWithAuthentication(`/payment/data`, props)
    return data
}

export default getPayment
