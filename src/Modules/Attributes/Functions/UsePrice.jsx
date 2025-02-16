const usePrice = (entity, variants, variantSlug) => {

    let price

    if (variantSlug) {
        price = variants?.find(item => item.slug === variantSlug)?.pricingPriceAmount
    } else {
        price = entity?.pricingPriceAmount
    }

    return price
}

export default usePrice
