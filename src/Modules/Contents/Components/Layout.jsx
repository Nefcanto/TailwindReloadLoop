import { Image } from "Base"
import { RichText } from "Shared"

const Layout = ({
    breadcrumb,
    content,
    page,
    schemas,
    seo,
    ...rest
}) => {

    return <>
        <div class="max-w-5xl mx-auto px-5 xl:px-0 mt-6">
            <div class="text-center">
                <h1 class={`inline-flex md:max-w-[70%] justify-center items-center my-5 py-4 px-10 font-bold leading-10 text-xl sm:text-2xl md:text-3xl text-center relative after:absolute after:content-[""] after:w-[35%] after:h-1 after:-bottom-[2.5px] after:start-0 after:end-0 after:mx-auto after:rounded-xl`}>
                    {page?.title}
                </h1>
            </div>
            {
                page?.imageGuid &&
                <Image
                    alt={page?.title}
                    containerClass="w-full aspect-[1/.4]"
                    hideDefault
                    src={page?.relatedItems.imageUrl}
                />
            }
            <div class="mt-14 mb-20 leading-8">
                <RichText
                    content={content}
                    {...rest}
                />
            </div>
        </div>
    </>
}

export default Layout
