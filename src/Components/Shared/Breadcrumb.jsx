import { DefaultBreadcrumb } from "Base"

const Breadcrumb = ({ breadcrumb }) => {

    return <>
        <section class="bg-custom-color1 bg-opacity-30 shadow-inner">
            <DefaultBreadcrumb
                wrapperClass=" max-w-7xl mx-auto flex gap-2 text-sm p-3 "
                itemClass="min-w-fit hover:text-custom-color1 "
                lastItemClass="min-w-fit whitespace-nowrap"
                separator={" /"}
                breadcrumb={breadcrumb}
            />
        </section>
    </>
}

export default Breadcrumb
