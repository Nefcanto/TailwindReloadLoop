import { useTagUrl } from "Vlog"

const Tags = ({ tags }) => {

    return <>
        <div class="flex flex-wrap gap-2 mb-10 pt-5">
            {
                tags?.map(tag => <>
                    <a
                        href={useTagUrl(tag.slug)}
                        class="bg-neutral-100 pb-2 text-black hover:bg-custom-color1/30 hover:text-black px-5 py-1 transition-all"
                    >
                        {tag.title}
                    </a>
                </>
                )}
        </div>
    </>
}

export default Tags
