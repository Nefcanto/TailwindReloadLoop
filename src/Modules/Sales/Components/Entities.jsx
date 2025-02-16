import {
    $,
    component$,
    useOnWindow,
    useSignal,
} from "@builder.io/qwik"
import { Image } from "Base"

const Entities = component$(({
    localePathPrefix,
    order,
}) => {

    const totalItems = order.relatedItems.orderItems.length
    const maxItems = useSignal(2)
    useOnWindow(
        "scroll",
        $(() => {
            if (window.innerWidth >= 1024) {
                maxItems.value = 7
            } else if (window.innerWidth >= 768) {
                maxItems.value = 4
            } else if (window.innerWidth >= 640) {
                maxItems.value = 3
            }
        })
    )
    const visibleItems = totalItems > maxItems.value ? order.relatedItems.orderItems.slice(0, maxItems.value) : order.relatedItems.orderItems
    const remainingItems = totalItems - visibleItems.length

    return <>
        <div class="flex flex-wrap justify-start gap-2.5 sm:gap-5 mb-2.5">
            {
                visibleItems.map(item => <div
                    class="relative"
                    key={item.id}
                >
                    <a
                        href={"#"}
                        target="_blank"
                        title={item.relatedItems.entity?.title}
                    >
                        <Image
                            alt={item.relatedItems.entity?.title}
                            containerClass="w-16 aspect-square rounded-full border border-custom-color3 hover:border-custom-color1 transition-all overflow-hidden"
                            src={item.relatedItems.entity?.relatedItems?.imageUrl}
                        />
                    </a>
                    <p class="absolute -top-1 -end-1 bg-custom-color1/70 text-white text-xs rounded-full px-1.5 py-1 shadow-lg select-none z-10">
                        X{item?.quantity}
                    </p>
                </div>)
            }
            {
                remainingItems > 0 && <>
                    <p class="w-16 aspect-square rounded-full border border-custom-color3 bg-custom-color3 text-sm font-bold relative flex items-center justify-center select-none">
                        +{remainingItems}
                    </p>
                </>
            }
        </div>
    </>
})

export default Entities
