import { merge } from "Base"
import { Sort } from "ProductsParts"

const TopTools = ({
    categories,
    products,
    productSortLinks,
    productsStatics,
}) => {

    return products?.data?.length > 0 && <>
        <section class={merge("bg-custom-color23 xs:text-sm mb-3 flex w-full flex-row items-center justify-between gap-0.5 rounded-lg px-1 py-2.5 text-xs sm:px-3 sm:font-semibold lg:mb-5 lg:px-2.5 lg:py-2.5 xl:text-base", categories?.length == 0 && "mt-4 md:mt-8")}>
            <Sort {...productSortLinks} />
            <p class="hidden sm:flex text-custom-color22">
                {productsStatics?.totalCountTitle}
                <span class="ps-1">
                    {products?.metadata?.totalCount}
                </span>
            </p>
        </section>
    </>
}

export default TopTools
