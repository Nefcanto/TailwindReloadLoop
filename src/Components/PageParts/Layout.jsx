import {
    Image,
    RichText,
} from "Base"
import { Content } from "PageParts"
const Layout = ({
    breadcrumb,
    content,
    page,
    schemas,
    seo,
    ...rest
}) => {

    return <>
        <div class="max-w-5xl mx-auto px-5 xl:px-0 mt-40">

            <div class="text-center">
                <h1 class={"inline-flex md:max-w-[70%] justify-center items-center my-5 py-4 px-10 font-bold leading-10 text-xl sm:text-2xl md:text-3xl text-center relative after:absolute after:content-[\"\"] after:w-[35%] after:h-1 after:-bottom-[2.5px] after:start-0 after:end-0 after:mx-auto after:rounded-xl"}>
                    {page?.title}
                </h1>
            </div>
            {
                page?.relatedItems.imageUrl &&
                <Image
                    src={page?.relatedItems.imageUrl}
                    alt={page?.title}
                    containerClass="max-w-full w-1/1 aspect-[1/.4]"
                />
            }
            <Content content={content} />
        </div>
    </>
}

export default Layout
