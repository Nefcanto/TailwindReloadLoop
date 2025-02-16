import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import {
    merge,
    Modal,
} from "Base"
import { useProductUrl } from "Products"
import {
    EntityShortInfo,
    MoreDetailsButton,
    Slider,
} from "Shared"
import { Eye } from "Svg"

const QuickView = component$(({
    localePathPrefix,
    product,
    productStatics,
}) => {

    const modalIsOpen = useSignal(false)

    return <>
        {

        }
        <div
            class={merge("w-fit flex flex-row gap-1.5 transition-all bg-custom-color1 p-1.5 rounded-md cursor-pointer border", product?.featured ? "border-t-2 border-custom-color2" : "border-custom-color2 bg-white")}
            onClick$={() => modalIsOpen.value = true}
        >
            {
                productStatics?.quickViewTitle
                    ?
                    <p class="rtl:order-2 text-sm">
                        {productStatics?.quickViewTitle}
                    </p>
                    :
                    <Eye
                        aria-label={productStatics?.quickViewTitle}
                        class="w-6 aspect-square"
                    />
            }
        </div>
        {
            modalIsOpen.value && <Modal
                class="relative w-4/5 2xl:w-3/5 max-h-[85%] flex flex-col lg:flex-row gap-2 p-0 pt-8 lg:p-5 overflow-y-auto cursor-auto"
                closeClass="hover:text-custom-color4 transition-colors"
                containerClass="z-50 cursor-pointer"
                isOpen={modalIsOpen}
            >
                <Slider
                    {...product}
                    sliderName={`slider-${product.id}`}
                />
                <div class="w-full lg:w-1/2 flex flex-col gap-8 md:justify-between lg:my-3">
                    <div class="w-full flex flex-col gap-2.5 px-2.5 xl:ps-5 lg:pe-0">
                        <div class="px-2.5 py-3 md:py-0">
                            <a
                                class="font-bold text-xl md:text-2xl"
                                href={useProductUrl(product?.slug, localePathPrefix)}
                            >
                                {product?.title}
                            </a>
                        </div>
                        <EntityShortInfo
                            {...productStatics}
                            entity={product}
                            localePathPrefix={localePathPrefix}
                            quickView
                        />
                    </div>
                    <MoreDetailsButton
                        {...productStatics}
                        containerClass="sticky bottom-0 lg:relative bg-custom-color23 lg:bg-transparent border-t border-t-custom-color21 lg:border-none shadow-t-xl lg-shadow-none px-2.5 lg:px-1.5 z-40"
                        link={useProductUrl(product?.slug, localePathPrefix)}
                        linkClass="my-1 lg:ms-auto"
                    />
                </div>
            </Modal>
        }
    </>
})

export default QuickView
