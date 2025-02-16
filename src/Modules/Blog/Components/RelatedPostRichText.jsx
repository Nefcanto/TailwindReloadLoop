import { Image } from "Base"
import { usePostUrl } from "Blog"

const RelatedPostRichText = ({
    posts,
    slug,
}) => {

    const post = posts.find(post => post.slug === slug)

    return <>
        <div class="w-full rounded-sm bg-gray-100 p-6 my-10 flex items-center gap-4">
            <Image
                src={post?.relatedItems?.imageUrl}
                alt={post?.title}
                containerClass="w-20 aspect-square rounded-sm overflow-hidden"
            />
            <div class="flex gap-2">
                <span class="text-blue-600">hatman bekhanid: </span>
                <a
                    href={usePostUrl(post?.slug)}
                    class="hover:text-blue-800"
                    target="_blank"
                >
                    {post?.title}
                </a>
            </div>
        </div>
    </>
}

export default RelatedPostRichText
