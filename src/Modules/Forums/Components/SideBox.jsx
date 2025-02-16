import { LocalizedDate } from "Base"
import { useDiscussionUrl } from "Forums"

const SideBox = ({
    items,
    localePathPrefix,
    title,
}) => {

    return <div class="border rounded-2xl overflow-hidden mb-6">
        <p class="bg-custom-color1 text-white px-4 py-2">
            {title}
        </p>
        <div>
            {
                items?.map(item => <div
                    key={item.id}
                    class="border-t p-3 text-sm flex flex-col gap-3"
                >
                    <a
                        class="line-clamp-1 text-block text-sm"
                        href={useDiscussionUrl(item.slug, localePathPrefix)}
                    >
                        {item.title}
                    </a>
                    <div class="flex justify-between items-center gap-3">
                        <LocalizedDate utcDate={item.creationUtcDate} />
                        <p class="line-clamp-1">{item.contactsPersonDisplayName}</p>
                    </div>
                </div>
                )}
        </div>
    </div>
}

export default SideBox
