import { Project } from "Projects"
import {
    Breadcrumb,
    Pagination,
    RichText,
} from "Shared"

const Layout = ({
    breadcrumb,
    localePathPrefix,
    projects,
    seo,
}) => {

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <div class="text-center">
            <h1 class={`text-center text-2xl font-bold after:content-[""] after:block after:mx-auto after:mt-4 after:w-16 after:h-[5px] after:bg-custom-color1 after:rounded-lg`}>
                {seo?.pageTitle}
            </h1>
        </div>
        <div class="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {
                projects?.data?.map(item => <div key={item.id}>
                    <Project
                        category={item.relatedItems?.hierarchies[0]}
                        cityDivisionName={item.geoCityDivisionName}
                        cityDivisionSlug={item.geoCityDivisionSlug}
                        configs={item.relatedItems?.entityConfigs}
                        image={item.relatedItems?.imageUrl}
                        localePathPrefix={localePathPrefix}
                        title={item.title}
                    />
                </div>)
            }
        </div>
        <Pagination metadata={projects?.metadata} />
        {
            seo?.relatedItems?.content && seo?.relatedItems?.content != "[]" &&
            <div>
                <div class="py-6">
                    <div class="bg-gray-200 px-4 md:px-10 py-9 rounded-2xl">
                        <RichText content={seo?.relatedItems?.content} />
                    </div>
                </div>
            </div>
        }
    </>
}

export default Layout
