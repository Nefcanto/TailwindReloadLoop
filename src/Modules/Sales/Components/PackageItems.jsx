import { merge } from "Base"
import { useCurrency } from "Currencies"

const PackageItems = ({
    packageItem,
    statics,
}) => {

    const cellStyle = "px-1 sm:px-2.5 md:px-4 py-2"

    return <section class="my-8">
        <p class="text-lg font-bold">
            {statics?.orderDetailsTitle}
        </p>
        <table class="min-w-full text-sm rounded overflow-hidden mt-3">
            <thead class="bg-custom-color21 font-medium py-1.5 border-b border-gray-300">
                <tr>
                    <th />
                    <th
                        class={merge(cellStyle, "px-2")}
                        scope="col"
                    >
                        {statics?.entityTitle}
                    </th>
                    <th
                        class={cellStyle}
                        scope="col"
                    >
                        {statics?.totalPriceEntity}
                    </th>
                </tr>
            </thead>
            <tbody class="text-center">
                {
                    packageItem.relatedItems?.orderItems?.map((item, index) => <div
                        class="w-full"
                        key={item.id}
                    >
                        <tr class={`${index % 2 == 0 ? "bg-custom-color1" : "bg-custom-color2"} hover:bg-custom-color1/80 hover:text-custom-color2 transition-all py-2`}>
                            <td class={merge(cellStyle, "text-xs md:text-sm")}>
                                {index + 1}
                            </td>
                            <td class={merge(cellStyle, "px-2")}>

                                {item.relatedItems.entity?.title}
                                <strong class="font-semibold md:font-bold ps-1">
                                    ({item.quantity}x)
                                </strong>

                            </td>
                            <td class={cellStyle}>
                                {item.monetaryValuesMonetaryValueQuantity?.toLocaleString()}
                                <span class="text-xs md:text-sm ps-1">
                                    {useCurrency(item)?.formattedName}
                                </span>
                            </td>
                        </tr>
                    </div>)
                }
            </tbody>
        </table>
    </section>
}

export default PackageItems
