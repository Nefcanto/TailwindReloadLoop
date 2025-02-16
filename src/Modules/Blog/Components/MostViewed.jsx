import { Image } from "Base"
import {
    Section,
    usePostUrl,
} from "Blog"

const MostViewed = ({
    mostViewedPosts
}) => {

    return <Section title="Most viewed posts">
        {
            mostViewedPosts?.map(post => <div
                key={post.id}
                class="flex gap-4 mb-4 "
            >
                <a href={usePostUrl(post.slug)}>
                    <Image
                        containerClass="w-20 aspect-square shrink-0"
                        imageClass="rounded-tl rounded-tr "
                        src={post.relatedItems.imageUrl}
                    />
                </a>
                <div>
                    <div class="text-gray-400 text-sm">
                        {
                            new Date(post.utcDate || post.lastUpdateUtcDate).toUTCString().split(" ").slice(1, 4).join(" ")
                        }
                    </div>
                    <h3 class="font-bold mt-0.5 text-md text-slate-800 drop-shadow-sm">
                        <a href={usePostUrl(post.slug)}>
                            {post.title}
                        </a>
                    </h3>
                </div>
            </div>)
        }
    </Section>
}

export default MostViewed
