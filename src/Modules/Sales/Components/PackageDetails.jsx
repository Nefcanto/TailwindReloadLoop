import { LocalizedDate } from "Base"
import { useCurrency } from "Currencies"

const PackageDetails = ({
    currentLocale,
    localesEnum,
    packageItem,
    statics,
}) => {

    const strongStyles = "inline-block m-1 px-1 bg-custom-color1/15 rounded"
    const {
        order,
        transaction,
    } = packageItem.relatedItems

    return <>
        <section class="mt-3 mb-12">
            <p class="mb-2.5 text-base/8">
                {statics?.orderTitle}
                <strong class={strongStyles}>
                    #{packageItem.ordersOrderNumber}
                </strong>
                {statics?.placedOn}
                <strong class={strongStyles}>
                    <LocalizedDate
                        localeKey={currentLocale?.key}
                        localesEnum={localesEnum}
                        utcDate={packageItem.ordersOrderUtcDate}
                    />
                </strong>
                {statics?.status}
                <strong class={`${strongStyles} ${transaction?.isSuccess ? "bg-green-500" : "bg-red-500"} text-custom-color2`}>
                    {transaction?.bankState}
                </strong>
                {statics?.stateSuffix}
            </p>
            <div class="flex flex-col gap-y-2 justify-start md:flex-row md:flex-wrap md:gap-x-5 items-start text-md text-custom-color2">
                <p>
                    {statics?.amountTitle}
                    <strong class="font-semibold ps-1">
                        {order.monetaryValuesMonetaryValueQuantity?.toLocaleString()}
                        {useCurrency(order)?.formattedName}
                    </strong>
                </p>
                <p>
                    {statics?.paymentMethodTitle}
                    <strong class="font-semibold ps-1">
                        {statics?.gatewayTitle}
                    </strong>
                </p>
            </div>
        </section>
    </>
}

export default PackageDetails
