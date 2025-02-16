import { component$ } from "@builder.io/qwik"
import {
    Calendar,
    Person,
    usePostUrl,
} from "Blog"
import {
    Image,
    LocalizedDate,
} from "Base"

const Post = component$(({
    currentLocale,
    localePathPrefix,
    post,
    readMoreText,
}) => {
    return <div
        class="bg-white rounded-sm shadow-lg shadow-slate-200"
    >
        <a href={usePostUrl(post.slug, localePathPrefix)}>
            <Image
                src={post.relatedItems.imageUrl}
                containerClass="w-full aspect-square md:aspect-auto md:h-64 rounded-tl rounded-tr"
                alt={post.title}
            />
        </a>
        <div class="mx-4 mt-4 text-xs flex items-center gap-4">
            <span class="flex items-center gap-0.5">
                <Person class="scale-50 " />
                <span>{post.author || "Admin"}</span>
            </span>
            <span class="flex items-center gap-0.5">
                <Calendar class="scale-50" />
                <span>
                    <LocalizedDate
                        locale={currentLocale.key}
                        utcDate={post?.utcDate || post?.lastUpdateUtcDate}
                    />
                </span>
            </span>
        </div>
        <h2 class="mx-4 mt-3 text-slate-800 font-bold font-dosis text-xl transition duration-300">
            <a href={usePostUrl(post.slug, localePathPrefix)}>
                {post.title}
            </a>
        </h2>
        <p class="leading-7 text-slate-500 mx-4 mt-3 text-md lien-clamp-2 ">{post.summary}</p>
        <a
            href={usePostUrl(post.slug, localePathPrefix)}
            aria-label={post.title}
            class="inline-block my-6 font-semibold text-slate-600 mx-4 text-md hover:text-black"
        >
            {readMoreText || "Read more"}
        </a>
    </div>
})

export default Post
