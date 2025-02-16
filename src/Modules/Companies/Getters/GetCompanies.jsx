import { getFromCacheOrApi } from 'Base'

const getCompanies = async (props) => {
    const { query } = props || {}
    const locale = query?.get('locale')
    const companies = await getFromCacheOrApi(`/companies/data?locale=${locale}`)
    return companies
}

export default getCompanies
