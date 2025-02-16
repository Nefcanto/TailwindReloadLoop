import { component$ } from "@builder.io/qwik"
import { LocalizedDate } from "Base"
import { usePostUrl } from "Blog"

const PostCard = component$(({
    localePathPrefix,
    post,
}) => {

    return <a
        class="bg-white rounded-lg inline-block shadow-xl mt-[10px] p-5 text-start"
        href={usePostUrl(post.slug, localePathPrefix)}
    >
        <div>
            <LocalizedDate utcDate={post.utcDate} />
        </div>
        <h2 class="font-black mt-[5px] line-clamp-3 h-[72px]">
            {post.title}
        </h2>
        <span class="text-[#8b8178]">
            {post?.relatedItems?.categories?.[0]?.title}
        </span>
    </a>
})

export default PostCard
