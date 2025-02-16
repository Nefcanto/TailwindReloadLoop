import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import {
    Image,
    useLocalizedDate,
} from "Base"
// import { useProductUrl } from "Products"

const OrderHistories = component$(({
    currentLocale,
    localePathPrefix,
    localesEnum,
    orderHistoryStatics,
    packages,
}) => {

    const useProductUrl = () => { return "/stupid-architecture" }

    const activeTab = useSignal("delivered")

    return <div class="w-full">
        <div class="w-full flex flex-row gap-x-2 overflow-x-auto">
            {
                Object.keys(packages || {}).map(packageType => <div
                    class={`p-2 rounded-md cursor-pointer border shadow-sm select-none ${activeTab.value === packageType ? "text-white bg-custom-color1" : "text-black bg-white hover:bg-custom-color1/30 duration-300"}`}
                    onClick$={() => activeTab.value = packageType}
                    key={packageType?.id}
                >
                    {orderHistoryStatics[packageType]}
                </div>)
            }
        </div>
        <div class="flex flex-col items-center justify-center gap-2 mt-6 w-full">
            {
                packages?.[activeTab.value]?.map(item => <div
                    class="shadow-lg bg-white w-full p-4 rounded-md flex flex-col items-start justify-start"
                    key={item?.id}
                >
                    <strong>
                        #{item.ordersOrderNumber}
                    </strong>
                    {activeTab.value === "ongoing" && <div class={`py-4 flex items-center w-full sm:max-w-lg me-auto my-2 sm:px-4 relative`}>
                        {item.relatedItems.histories.map((history, index) => <div
                            class="w-full flex flex-col gap-y-3 items-start justify-center"
                            key={history?.id}
                        >
                            <span class="text-xs translate-x-1/3 px-2">{
                                useLocalizedDate({
                                    localeKey: currentLocale.key,
                                    localesEnum: localesEnum,
                                    utcDate: history.utcDate
                                })
                            }</span>
                            <div class={`w-full relative before before:absolute before:h-0.5 before:start-0 before:top-1/2 before:-translate-y-1/2 before:z-10 ${index + 1 === item.relatedItems.histories.length ? "before:w-0" : "before:w-full"} ${index < item.relatedItems.histories.length ? "before:bg-green-500" : "before:bg-gray-300"}`}>
                                <div class={`w-6 aspect-square rounded-full relative z-20 flex items-center justify-center text-xs ${index + 1 === item.relatedItems.histories.length ? "bg-green-500" : "bg-gray-300"}`}>{index + 1}
                                </div>
                            </div>

                            <span
                                class="text-xs">{Object.entries(orderHistoryStatics).find(item => item?.[0].toLowerCase() == history.relatedItems.stateKey.toLowerCase())?.[1] || history.relatedItems.stateKey}</span>

                        </div>
                        )}
                    </div>}
                    <span class="p-2 text-sm">
                        {item.contactsPersonDisplayName}
                    </span>
                    <span class="p-2 text-sm">
                        {item.contactsAddressFull}
                    </span>
                    <span class="p-2 text-sm">
                        {orderHistoryStatics?.totalAmount} {item.ordersOrderTotalPrice.toLocaleString()}
                    </span>
                    <span>
                        <span class="p-2 text-sm">
                            {item.paymentPaymentMethodTitle}
                        </span>
                        {item.paymentGatewayTitle && <>
                            -
                            <span class="p-2 text-sm">
                                {item.paymentGatewayTitle}
                            </span>
                        </>
                        }

                    </span>
                    <span class="p-2 text-sm">
                        {item.shipmentShipmentMethodTitle}
                    </span>
                    <div class="p-2 rounded-md border py-4 w-full my-4">
                        <p class="py-4 text-md">{orderHistoryStatics.productsList}</p>

                        <div class="flex items-center my-2 gap-4 flex-wrap">

                            {
                                item.relatedItems?.order?.relatedItems?.orderItems?.map(product => <div
                                    key={product.id}
                                    class="w-28 px-2"
                                >
                                    <div
                                        class="flex flex-col items-center justify-center">
                                        <a href={useProductUrl(product.relatedItems.entity.slug, localePathPrefix)}>
                                            <Image
                                                containerClass="w-20 aspect-square"
                                                src={product.relatedItems.entity.relatedItems.imageUrl}
                                            />
                                        </a>
                                        <p class="line-clamp-2 text-xs my-1">
                                            <a
                                                class="hover:text-custom-color1 duration-300"
                                                href={useProductUrl(product.relatedItems.entity.slug, localePathPrefix)}>
                                                {product.relatedItems.entity.title}
                                            </a>
                                        </p>
                                        <span class="text-xs">
                                            <span>{product.price.toLocaleString()}</span>
                                            <span class="px-1">*</span>
                                            <span>{product.quantity}</span>
                                        </span>
                                    </div>
                                </div>
                                )}
                        </div>
                    </div>

                </div>
                )}
        </div>
    </div>
})

export default OrderHistories
