import { component$ } from "@builder.io/qwik"
import {
    Image,
    LocalizedDate,
    md,
    Swiper,
    SwiperSlide,
} from "Base"
import {
    useCategoryUrl,
    usePostUrl,
} from "Blog"
import {
    Cta,
    Overlay,
    Title,
} from "Shared"

const Posts = component$(({
    ctaLink,
    ctaText,
    currentLocale,
    isRtl,
    latestPosts,
    localePathPrefix,
    posts,
    title,
}) => {
    return <div class="posts py-20">
        <Title
            text={title}
            class="mb-8"
        />
        <Swiper
            name="latestPostsSlider"
            containerClass="pb-12 px-6 w-full md:px-12"
            paginationClass="active-bullet:bg-custom-color1"
            config={{
                breakpoints: {
                    [md]: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                },
            }}
        >
            {
                latestPosts?.map((post, index) => <SwiperSlide
                    key={post.id}
                >
                    <div class="relative w-full text-white">
                        {
                            post.relatedItems.categories?.length > 0 &&
                            <a
                                class="absolute z-10 top-0 w-wrap mx-auto text-black text-center font-medium start-6 bg-custom-color1 rounded-b-lg px-4 pb-1 line-clamp-1"
                                href={useCategoryUrl(post?.relatedItems?.categories[0]?.slug, localePathPrefix)}
                            >
                                {post.relatedItems.categories[0].title}
                            </a>
                        }
                        <Image
                            containerClass="max-w-full w-1/1 max-w-[560px] aspect-square"
                            src={post.relatedItems.imageUrl}
                            alt={post.title}
                            priority={index < 3}
                        />
                        <div class="absolute z-10 bottom-0 p-6">
                            <LocalizedDate
                                utcDate={post.lastUpdateUtcDate}
                                locale={currentLocale.key}
                            />
                            <a
                                class="flex flex-col mb-4"
                                href={usePostUrl(post.slug, localePathPrefix)}
                            >
                                <p class="font-black">{post.title}</p>
                                <p class="mt-2">{posts.ctaText}</p>
                            </a>
                        </div>
                        <Overlay />
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
        <Cta
            text={ctaText}
            link={ctaLink}
            class="w-44 mt-2"
        />
    </div>
})

export default Posts
