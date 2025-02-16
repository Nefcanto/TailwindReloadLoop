import { LocalizedDate } from "Base"
import {
    useBoardUrl,
    useDiscussionUrl,
} from "Forums"

const VerticalForum = ({
    boardsCategories,
    boardTitle,
    items,
    lastTopic,
    localePathPrefix,
    updateTitle,
}) => {

    return <>
        <p class="font-bold text-2xl mb-4">{boardsCategories}</p>
        <div class="flex flex-col gap-4">
            {
                items?.map(item => <div
                    class="bg-gray-100 rounded-2xl overflow-hidden"
                    key={item.id}
                >
                    <div class="bg-custom-color1/30 px-3 pt-2 pb-3">
                        {item?.title}
                    </div>
                    {
                        item?.relatedItems?.boards?.map(board => <div
                            class="grid grid-cols-1 sm:grid-cols-10 gap-3 px-3 pt-2 pb-3 text-sm"
                            key={board.id}
                        >
                            <div class="sm:col-span-2 md:col-span-3 flex gap-1.5">
                                <p class="w-8">{boardTitle}</p>
                                <a
                                    class="w-[calc(100%-40px)] line-clamp-1 font-bold"
                                    href={useBoardUrl(board?.slug, localePathPrefix)}
                                >
                                    {board?.title}
                                </a>
                            </div>
                            <div class="sm:col-span-2 md:col-span-3 flex flex-wrap gap-3">
                                <p>{updateTitle}</p>
                                <LocalizedDate utcDate={board?.relatedItems?.lastDiscussion?.creationUtcDate} />
                            </div>
                            <div class="sm:col-span-6 md:col-span-4 flex gap-1.5">
                                <p class="w-20">{lastTopic}:</p>
                                <a
                                    class="w-[calc(100%-80px)] line-clamp-1"
                                    href={useDiscussionUrl(board?.relatedItems?.lastDiscussion?.slug, localePathPrefix)}
                                >
                                    {board?.relatedItems?.lastDiscussion?.title}
                                </a>
                            </div>
                        </div>)
                    }
                </div>)
            }
        </div>
    </>
}

export default VerticalForum
