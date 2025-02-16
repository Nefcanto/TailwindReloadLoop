import {
    Image,
    LocalizedDate,
} from "Base"
import { RichText } from "Shared"

const Discussion = ({
    content,
    creationUtcDate,
    currentLocale,
    discussionTitle,
    sendComment,
    title,
}) => {

    return <>
        <div class="grid grid-cols-7 border rounded-2xl overflow-hidden">
            <div class="col-span-7 md:col-span-2 flex flex-row md:flex-col md:justify-center items-center gap-4 p-5 bg-custom-color1/30">
                {/* <Image
                    containerClass="w-20 aspect-square rounded-sm full overflow-hidden"
                    src=""
                /> */}
                <p class="border border-gray-400 rounded-2xl px-6 pt-1 pb-1.5">{discussionTitle}</p>
            </div>
            <div class="col-span-7 md:col-span-5 p-5 flex flex-col gap-6">
                <p class="font-bold md:text-xl">{title}</p>
                <RichText content={content} />
                <p class="text-xs md:text-sm text-end text-gray-500">
                    <LocalizedDate
                        locale={currentLocale.key}
                        utcDate={creationUtcDate}
                    />
                </p>
            </div>
        </div>
        <div class="flex justify-center my-4">
            <a
                class="flex items-center gap-2 border border-custom-color1 rounded-2xl px-8 pt-1 pb-1.5 text-custom-color1 text-lg"
                href="#NewComment"
            >
                {sendComment}
            </a>
        </div>
    </>
}

export default Discussion
