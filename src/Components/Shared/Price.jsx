import { merge } from "Base"
import { useCurrency } from "Currencies"

const Price = ({
    class: internalClass,
    currencyUnitClass,
    priceClass,
    entity,
}) => {

    const { formattedName } = useCurrency(entity)
    const {
        monetaryValuesMonetaryValueQuantity,
        relatedItems,
    } = entity

    return <>
        <div class={merge("flex flex-col items-start", internalClass)}>
            <p class={merge("text-xs", currencyUnitClass)}>
                <strong class={merge("text-base pe-1.5", priceClass)}>
                    {
                        relatedItems?.discount
                            ?
                            relatedItems?.discounted?.toLocaleString()
                            :
                            monetaryValuesMonetaryValueQuantity?.toLocaleString()
                    }
                </strong>
                {formattedName}
            </p>
            {
                relatedItems?.discount
                &&
                <div class="flex flex-row gap-2.5 group select-none">
                    <div class="relative">
                        <p class="text-custom-color22">
                            {monetaryValuesMonetaryValueQuantity?.toLocaleString()}
                        </p>
                        <div class="absolute -start-1.5 -end-1.5 h-[1px] bg-custom-color22 top-[40%] -rotate-6" />
                    </div>
                    <div class="flex items-center h-5 bg-custom-color4/80 group-hover:bg-custom-color4 rounded-full rounded-ee transition-colors">
                        <p class="text-xs text-white px-1.5">
                            {relatedItems?.discount?.percentage}
                        </p>
                    </div>
                </div>
            }
        </div>
    </>
}

export default Price
