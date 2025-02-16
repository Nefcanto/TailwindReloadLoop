import { component$ } from "@builder.io/qwik"
import {
    Image,
    LocalizedDate,
} from "Base"
import {
    useCategoryUrl,
    usePostUrl,
} from "Blog"
import {
    MoreDetailsButton,
    RoutingAnimation,
} from "Shared"
import {
    Calendar,
    Category,
} from "Svg"

const Post = component$(({
    iconTitle,
    localePathPrefix,
    post,
}) => {

    return <>
        <div class="max-w-full w-[400px] mx-auto">
            <RoutingAnimation>
                <div class="bg-white rounded-3xl border border-custom-color24 group transition-all duration-300">
                    <div class="w-full p-4">
                        <a
                            class="w-full block"
                            href={usePostUrl(post.slug, localePathPrefix)}
                        >
                            <Image
                                alt={post.title}
                                containerClass="max-w-full w-1/1 aspect-[4/3] rounded-2xl overflow-hidden"
                                imageClass="md:group-hover:scale-[1.1] duration-300 transition-all"
                                src={post.relatedItems.imageUrl}
                            />
                        </a>
                        <h2 class="font-bold my-4 line-clamp-1">
                            {post.title}
                        </h2>
                        <p class="text-base line-clamp-3 h-[72px] mb-6">
                            {post.summary}
                        </p>
                        <MoreDetailsButton
                            containerClass="w-fit ms-auto"
                            link={usePostUrl(post.slug, localePathPrefix)}
                            linkClass="font-normal text-black"
                            moreDetails={iconTitle.title}
                        />
                    </div>
                    <div class="text-gray-600 fil-gray-600 flex flex-row border-t-2 border-custom-color24 justify-between text-[#8b8178] py-3 px-4 [&>div]:flex [&>div]:gap-2 [&>div]:items-center [&>div]:justify-center [&>div]:text-sm">
                        {
                            post?.relatedItems?.hasCategories && <div>
                                <Category class="w-4 aspect-square" />
                                <a href={useCategoryUrl(post?.relatedItems?.categories?.[0]?.slug, localePathPrefix)}>
                                    {post?.relatedItems?.categories?.[0]?.title}
                                </a>
                            </div>
                        }
                        <div class="ms-auto">
                            <LocalizedDate utcDate={post.utcDate} />
                            <Calendar class="w-4 aspect-square" />
                        </div>
                    </div>
                </div>
            </RoutingAnimation>
        </div>
    </>
})

export default Post
