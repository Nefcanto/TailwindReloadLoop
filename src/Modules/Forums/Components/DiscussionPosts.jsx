import {
    Image,
    LocalizedDate,
} from "Base"
import { RichText } from "Shared"

const DiscussionPosts = ({
    currentLocale,
    items,
    discussionTitle,
}) => {

    return <div class="flex flex-col gap-2">
        {
            items?.map(item => <div
                class="grid grid-cols-7 border rounded-2xl overflow-hidden"
                key={item.id}
            >
                <div class="col-span-7 md:col-span-2 flex flex-row md:flex-col items-center gap-4 p-5 bg-custom-color2">
                    <Image
                        containerClass="w-20 aspect-square rounded-sm full overflow-hidden"
                        src={item.relatedItems.imageUrl}
                    />
                    <p class="border border-gray-400 rounded-2xl px-6 pt-1 pb-1.5">{discussionTitle}</p>
                </div>
                <div class="col-span-7 md:col-span-5 p-5 flex flex-col gap-6">
                    <div class="text-sm md:text-base text-gray-700">
                        <RichText content={item.relatedItems.content} />
                    </div>
                    <p class="text-xs md:text-sm text-end text-gray-500">
                        <LocalizedDate
                            locale={currentLocale.key}
                            utcDate={item.creationUtcDate}
                        />
                    </p>
                </div>
            </div>)
        }
    </div>
}

export default DiscussionPosts
