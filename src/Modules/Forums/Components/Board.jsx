import { LocalizedDate } from "Base"
import {
    useBoardUrl,
    useDiscussionUrl,
} from "Forums"

const Board = ({
    createdBy,
    items,
    lastReply,
    lastTopic,
    localePathPrefix,
    replyNum,
}) => {

    return <>
        <div class="flex flex-col gap-4">
            <div class="even:[&>div]:bg-gray-100 rounded-2xl overflow-hidden">
                <div class="bg-custom-color1/30 px-3 pt-2 pb-3 grid grid-cols-1 md:grid-cols-10 gap-3">
                    <p class="md:col-span-4">{lastTopic}</p>
                    <p class="hidden md:block md:col-span-2 text-center">{replyNum}</p>
                    <p class="hidden md:block md:col-span-4">{lastReply}</p>
                </div>
                {
                    items?.map(item => <div
                        class="grid grid-cols-1 md:grid-cols-10 gap-3 px-3 pt-2 pb-3 text-sm"
                        key={item.id}
                    >
                        <div class="md:col-span-4 flex flex-col gap-1">

                            <a
                                class="w-[calc(100%-40px)] line-clamp-1"
                                href={useDiscussionUrl(item.slug, localePathPrefix)}
                            >
                                {item.title}
                            </a>

                            <div class="flex gap-1 flex-wrap">
                                <p>{createdBy}</p>
                                <p class="text-custom-color1">
                                    {item.contactsPersonDisplayName}
                                </p>
                            </div>

                        </div>

                        <div class="order-3 md:order-none md:col-span-2 text-center flex justify-center items-center"></div>

                        <div class="md:col-span-4 flex flex-col gap-1">
                            <a
                                class="w-full line-clamp-1"
                                href={useDiscussionUrl(item.slug, localePathPrefix)}
                            >
                                {item.title}
                            </a>
                            <div class="flex gap-1 flex-wrap">
                                <p>{createdBy}</p>
                                <p class="text-custom-color1">
                                    {item.contactsPersonDisplayName}
                                </p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </>
}

export default Board
