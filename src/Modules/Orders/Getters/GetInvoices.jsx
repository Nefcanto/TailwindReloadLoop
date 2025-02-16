import { getWithAuthentication } from "Base"

const getInvoices = async props => {

    const result = await getWithAuthentication("/invoices/data", props)
    return result
}

export default getInvoices
