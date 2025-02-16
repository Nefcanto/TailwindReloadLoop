import { component$ } from "@builder.io/qwik"
import { Post } from "BlogParts"

const Posts = component$(({
    iconTitle,
    localePathPrefix,
    posts,
}) => {
    return <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 xl:max-w-7xl xl:mx-auto text-center">
        {
            posts?.data?.map(post => <Post
                iconTitle={iconTitle}
                key={post.id}
                localePathPrefix={localePathPrefix}
                post={post}
            />
            )
        }
    </div>
})

export default Posts
