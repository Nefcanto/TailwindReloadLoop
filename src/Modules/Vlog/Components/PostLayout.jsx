import { component$ } from "@builder.io/qwik"
import { DefaultBreadcrumb } from "Base"
import { FaqPages } from "Seo"
import {
    Info,
    Related,
    Tags,
    Video,
} from "Vlog"

const PostLayout = component$(({
    breadcrumb,
    currentLocale,
    faqPages,
    localePathPrefix,
    localesEnum,
    locale,
    visitCount,
    post,
    relatedVlogPost,
    relatedPosts,
    ...rest
}) => {

    return <>
        <section>
            <div class="w-full bg-gray-100">
                <DefaultBreadcrumb
                    breadcrumb={breadcrumb}
                    wrapperClass="max-w-7xl mx-auto px-6 py-3 flex items-center text-sm text-white overflow-x-auto"
                    itemClass="min-w-fit whitespace-nowrap text-black hover:text-custom-color1 transition-all"
                    lastItemClass="text-black"
                    separatorClass="text-gray-500 mx-2"
                />
            </div>

            <div class="max-w-7xl px-6 mx-auto mt-10 border-b border-neutral-200 pb-6">

                <Video url={post.relatedItems.videoUrl} />

                <div class="w-full md:w-2/3 mx-auto">

                    <Info
                        currentLocale={currentLocale}
                        locale={locale}
                        localesEnum={localesEnum}
                        post={post}
                        visitCount={visitCount}
                    />

                    <h1 class="font-bold text-md sm:text-lg mt-6 mb-2">
                        {post.title}
                    </h1>
                    <p>
                        {post.description}
                    </p>

                </div>

            </div>
            <div class="max-w-7xl px-6 mx-auto mb-10">

                <Tags tags={post?.relatedItems?.tags} />

                <FaqPages
                    containerClass="bg-gray-100 shadow-none text-black"
                    arrowClass="bg-white fill-custom-color1 rounded-full"
                    faqPages={faqPages}
                />

                <Related
                    currentLocale={currentLocale}
                    locale={locale?.key}
                    localePathPrefix={localePathPrefix}
                    localesEnum={localesEnum}
                    posts={relatedPosts}
                />

            </div>
        </section>
    </>
})

export default PostLayout
