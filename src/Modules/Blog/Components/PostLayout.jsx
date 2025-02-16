import { component$ } from "@builder.io/qwik"
import { RichText } from "Shared"

const PostLayout = component$(({
    content,
    post,
}) => {

    return <div class="mt-10">
        <h1 class="font-bold md:text-xl mb-4">
            {post?.title}
        </h1>
        <RichText content={content} />
    </div>
})

export default PostLayout
