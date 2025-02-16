import { merge } from "Base"
import {
    Details,
    Entities,
    usePackageUrl,
} from "Sales"

const PackageItem = ({
    localePathPrefix,
    packageItem,
    statics,
    ...rest
}) => {
    const {
        order,
        transaction,
    } = packageItem.relatedItems

    return <>
        <div class={merge("flex flex-col gap-2.5 px-5 pt-5 lg:pb-5 border border-t-2 border-b-4 border-gray-300 rounded-xl bg-white overflow-hidden", transaction?.isSuccess ? "border-t-green-500" : "border-t-red-500")}>
            <Details
                {...rest}
                order={order}
                statics={statics}
                transaction={transaction}
            />
            <Entities
                localePathPrefix={localePathPrefix}
                order={order}
            />
            <div class="font-bold lg:border-none shadow-t-xl lg-shadow-none bottom-0 z-40 select-none border-t lg:ms-auto">
                <div class="flex items-center justify-center py-1.5">
                    <a
                        class="bg-custom-color1 px-2 py-1 rounded-xl text-custom-color2"
                        href={usePackageUrl(packageItem.id, localePathPrefix)}
                    >
                        {statics?.moreDetails ?? ">"}
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default PackageItem
