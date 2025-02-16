import {
    Image,
    LocalizedDate,
} from "Base"
import {
    Section,
    usePostUrl,
} from "Blog"

const Latest = ({
    currentLocale,
    latestPosts,
    blogStatics,
    localePathPrefix,
}) => {

    return <Section title={blogStatics?.latestPostsTitle || "Latest posts"}>
        {
            latestPosts?.map(post => <div
                key={post.id}
                class="flex gap-4 mb-4 "
            >
                <a href={usePostUrl(post.slug, localePathPrefix)}>
                    <Image
                        containerClass="w-20 aspect-square shrink-0"
                        imageClass="rounded-tl rounded-tr "
                        src={post.relatedItems.imageUrl}
                    />
                </a>
                <div>
                    <div class="text-gray-400 text-sm">
                        <LocalizedDate
                            locale={currentLocale.key}
                            utcDate={post?.utcDate || post?.lastUpdateUtcDate}
                        />
                    </div>
                    <h3 class="font-bold mt-0.5 text-md text-slate-800 drop-shadow-sm">
                        <a href={usePostUrl(post.slug, localePathPrefix)}>
                            {post.title}
                        </a>
                    </h3>
                </div>
            </div>)
        }
    </Section>
}

export default Latest
