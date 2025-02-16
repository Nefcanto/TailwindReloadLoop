import {
    Image,
    merge,
} from "Base"
import {
    useCategoryUrl,
    useProductUrl,
} from "Products"
import {
    MoreDetailsButton,
    Price,
    QuickView,
} from "Shared"

const Product = ({
    category,
    containerClass,
    localePathPrefix,
    moreDetailsBtn,
    priority,
    product,
    productStatics,
    quickView,
    statics,
}) => {

    const {
        categories,
        hasCategories,
    } = product.relatedItems

    return <>
        <article class={merge("group text-center text-base mx-auto border border-custom-color2/10 rounded", product?.featured ? "bg-custom-color1" : "bg-custom-color25", containerClass)}>
            <div class="relative overflow-hidden">
                <a
                    aria-label={product?.title}
                    href={useProductUrl(product.slug, localePathPrefix)}
                >
                    <Image
                        alt={product?.title}
                        containerClass="w-full mx-auto aspect-square rounded overflow-hidden"
                        priority={priority || false}
                        src={product.relatedItems?.imageUrl}
                    />
                </a>
                {
                    category && hasCategories && <>
                        <p class="absolute top-2 start-2.5 bg-custom-color23/75 text-sm rounded overflow-hidden me-auto p-0.5 z-10 group-hover:bg-custom-color23 transition-colors">
                            <a
                                class="py-[1px] px-1"
                                href={useCategoryUrl(categories?.at(0)?.slug, localePathPrefix)}
                            >
                                {categories?.at(0)?.title}
                            </a>
                        </p>
                    </>
                }
            </div>
            <h3 class="text-lg px-1 my-2.5 md:mt-4 lg:mb-3">
                <a
                    class="line-clamp-1"
                    href={useProductUrl(product.slug, localePathPrefix)}
                >
                    {product?.title}
                </a>
            </h3>
            <div class="flex justify-end items-end mb-2 me-2.5 lg:mb-2.5">
                <Price entity={product} />
            </div>
            {
                (quickView || moreDetailsBtn) && <>
                    <div class="flex flex-row items-center justify-between mb-2.5 lg:mb-4 mx-2 lg:mx-2.5">
                        {
                            quickView && <QuickView
                                {...statics}
                                localePathPrefix={localePathPrefix}
                                product={product}
                                productStatics={productStatics}
                            />
                        }
                        {
                            moreDetailsBtn && <MoreDetailsButton
                                {...productStatics}
                                containerClass="w-fit"
                                iconClass={product?.featured ? "bg-white group-hover/more:bg-custom-color1" : "group-hover/more:bg-white"}
                                link={useProductUrl(product?.slug, localePathPrefix)}
                                linkClass={merge("border gap-0.5 py-0.5 text-sm", product?.featured ? "bg-white border-white group-hover/more:border-custom-color2 group-hover/more:bg-custom-color1 border-t-2" : "bg-custom-color1 border-custom-color1 group-hover/more:border-custom-color2 group-hover/more:bg-white")}
                            />
                        }
                    </div>
                </>
            }
        </article>
    </>
}

export default Product
