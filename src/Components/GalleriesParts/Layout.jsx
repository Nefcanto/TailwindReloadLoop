import { } from "Base"
import {
    Breadcrumb,
    PageHeader,
    Pagination,
} from "Shared"
import { HeaderOffset } from "Layout"
import { Cards } from "GalleriesParts"

const Layout = ({
    breadcrumb,
    galleries,
    galleryHeader,
}) => {

    return <>
        <HeaderOffset />
        <Breadcrumb breadcrumb={breadcrumb} />
        <PageHeader {...galleryHeader} />
        <section class="max-w-7xl text-center mx-auto px-6">
            <Cards galleries={galleries} />
            <div>
                <Pagination
                    activeClass
                    container
                    count
                    ellipses="mx-2"
                    first="border-2 rounded-full mx-2"
                    items
                    last="border-2 rounded-full"
                    metadata={galleries.metadata}
                    next="mx-2 border-2 rounded-full"
                    previous="border-2 rounded-full"
                />
            </div>
        </section>
    </>
}

export default Layout
