import { useTagUrl } from "Blog"
import { Tag } from "Svg"

const Tags = ({
    localePathPrefix,
    tagItems,
    title,
}) => {

    return tagItems && tagItems.length > 0 && <>
        <div class="w-full flex flex-wrap items-center gap-x-4 px-4 py-2 mt-10 border border-custom-color24">
            <div class="flex gap-2">
                <Tag class="w-6 aspect-square" />
                <span>{title}:</span>
            </div>
            <div class="flex items-center gap-4 flex-wrap">
                {
                    tagItems?.map(item => <a
                        class="pt-1.5 pb-2 text-black hover:text-custom-color1 transition-all"
                        href={useTagUrl(item.slug, localePathPrefix)}
                        key={item.id}
                    >
                        {item.title}
                    </a>)
                }
            </div>
        </div>
    </>
}

export default Tags
