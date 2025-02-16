import {
    LocalizedDate,
    merge,
} from "Base"
import { useCurrency } from "Currencies"

const Details = ({
    currentLocale,
    localesEnum,
    order,
    statics,
    transaction,
}) => {

    return <>
        <div class={merge("flex items-center", transaction?.isSuccess ? "gap-2" : "gap-0.5")}>
            {
                transaction?.isSuccess
                    ?
                    "+"
                    :
                    "-"

            }
            <p class={transaction?.isSuccess ? "" : "t"}>
                {transaction?.bankState}
            </p>
        </div>
        <div class="flex flex-col md:flex-row md:flex-wrap gap-5 items-start md:items-center text-md text-custom-color22 p-5">
            <p>
                {statics?.orderNumberTitle}
                <strong class="ps-1">
                    {order?.number}
                </strong>
            </p>
            <p>
                {statics?.amountTitle}
                <strong class="ps-1">
                    {order?.monetaryValuesMonetaryValueQuantity?.toLocaleString()}
                    {useCurrency(order)?.formattedName}
                </strong>
            </p>
            <p>
                {statics?.quantityTitle}
                <strong class="ps-1">
                    {order?.totalQuantity}
                </strong>
            </p>
            <div class="flex">
                <p>
                    {statics?.dateTitle}
                </p>
                <p class="font-bold ps-1">
                    <LocalizedDate
                        localeKey={currentLocale?.key}
                        localesEnum={localesEnum}
                        utcDate={order?.utcDate}
                    />
                </p>
            </div>
        </div>
    </>
}

export default Details
