import {
    Pagination,
    Product,
} from "Shared"

const Products = ({
    categories,
    products,
    productsStatics,
    ...rest
}) => {

    return <section>
        {
            products?.metadata?.hasData
                ?
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2.5 md:gap-4 xl:gap-8 items-center justify-center">
                    {
                        products.data.map(product => <div key={product.id}>
                            <Product
                                {...rest}
                                category
                                containerClass="w-full shadow-xl"
                                moreDetailsBtn
                                product={product}
                                quickView
                            />
                        </div>)
                    }
                </div>
                :
                <div class="w-full min-h-64 text-custom-color2 flex select-none items-center justify-center rounded-lg p-5 text-lg lg:text-xl shadow-sm lg:mt-5 border border-custom-color25 mt-4 md:mt-8">
                    <p>
                        {productsStatics?.notFound}
                    </p>
                </div>
        }
        <Pagination
            containerClass="mt-4 md:mt-7"
            metadata={products?.metadata}
        />
    </section>
}

export default Products
