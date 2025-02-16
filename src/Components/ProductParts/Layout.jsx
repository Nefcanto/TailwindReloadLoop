import { useProductsUrl } from "Products"
import {
    Breadcrumb,
    EntityShortInfo,
    FeaturedProducts,
} from "Shared"
import { HeaderOffset } from "Layout"
import {
    Slider,
    Tabs,
} from "ProductParts"

const Layout = ({
    breadcrumb,
    localePathPrefix,
    product,
    productStatics,
    recentProducts,
    relatedProducts,
    ...rest
}) => {

    return <>
        <HeaderOffset />
        <Breadcrumb breadcrumb={breadcrumb} />
        <div class="max-w-7xl py-8 px-3 2xl:px-0 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">
            <Slider {...product} />
            <EntityShortInfo
                {...productStatics}
                entity={product}
                localePathPrefix={localePathPrefix}
            />
        </div>
        <Tabs
            {...rest}
            product={product}
            productStatics={productStatics}
        />
        <div class="pt-8">
            <FeaturedProducts
                localePathPrefix={localePathPrefix}
                products={relatedProducts}
                sliderName="relatedProducts"
                title={productStatics?.relatedProductsTitle}
            />
            <FeaturedProducts
                {...productStatics}
                link={useProductsUrl({ localePathPrefix: localePathPrefix })}
                localePathPrefix={localePathPrefix}
                products={recentProducts}
                sliderName="recentProducts"
                title={productStatics?.recentProductsTitle}
            />
        </div>
    </>
}

export default Layout
