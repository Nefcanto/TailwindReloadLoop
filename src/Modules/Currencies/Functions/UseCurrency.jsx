import { usePrefix } from "Units"

const useCurrency = entity => {

    const prefix = usePrefix(entity)

    let currency = {}
    if (entity?.currenciesCurrencyHasSubunit) {
        currency.title = entity?.currenciesCurrencySuperUnitName
    } else if (entity?.currenciesCurrencyHasSuperUnit) {
        currency.title = entity?.currenciesCurrencySuperUnitName
    } else {
        currency.title = entity?.currenciesCurrencyName ?? ""
    }

    currency.isoCode = entity?.currenciesCurrencyIsoCode
    currency.name = entity?.currenciesCurrencyName
    const formattedName = `${prefix?.commonName} ${currency.title}`
    return {
        currency,
        prefix,
        formattedName
    }
}

export default useCurrency
