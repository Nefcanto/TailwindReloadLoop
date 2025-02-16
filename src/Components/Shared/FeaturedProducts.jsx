import { merge } from "Base"
import {
    Products,
    SimpleTitle,
} from "Shared"

const FeaturedProducts = ({
    class: internalClass,
    products,
    ...rest
}) => {

    const hasProducts = products?.length > 0

    return hasProducts && <>
        <section class={(merge("w-full py-8 ps-3 2xl:px-0 bg-custom-color23", internalClass))}>
            <SimpleTitle
                {...rest}
                class="max-w-7xl px-3 2xl:px-0 mx-auto"
                isPlainTitle
            />
            <div class="-me-3">
                <Products
                    {...rest}
                    products={products}
                />
            </div>
        </section>
    </>
}

export default FeaturedProducts
