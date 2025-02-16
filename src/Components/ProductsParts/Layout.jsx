import {
    Breadcrumb,
    Content,
} from "Shared"
import { HeaderOffset } from "Layout"
import {
    Brands,
    Categories,
    CustomerExperience,
    Guide,
    Hero,
    Products,
    Services,
} from "ProductsParts"

const Layout = props => {

    const {
        breadcrumb,
        productsStatics,
        seo,
    } = props

    return <>
        <HeaderOffset />
        <Breadcrumb breadcrumb={breadcrumb} />
        <div class="max-w-7xl mx-auto my-10 px-3 md:px-6">
            <Hero {...props} />
            <Brands {...props} />
            <Services {...props} />
            <section class="mt-8 md:mt-12">
                <h1 class="mx-auto font-bold text-2xl 2xl:text-3xl w-fit select-none px-5 pb-1.5 lg:ps-0 leading-8 lg:pe-3 border-b-2 border-custom-color1 z-10">
                    {seo?.pageTitle}
                </h1>
            </section>
            <Categories {...props} />
            <Products {...props} />
            <Guide {...props} />
        </div>
        <CustomerExperience {...props} />
        <div class="max-w-7xl mx-auto my-10 px-3 md:px-6">
            <Content
                {...productsStatics}
                {...props}
            />
        </div>
    </>
}

export default Layout
