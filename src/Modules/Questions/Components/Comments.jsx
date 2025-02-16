import { LocalizedDate } from "Base"
import { Chat } from "Questions"

const Comments = ({
    comments,
    currentLocale,
    usersComments,
}) => {

    return <>
        {comments?.data.length > 0 &&
            <>
                <div class="flex gap-2 font-bold text-lg mt-10 mx-5 md:mx-20 border-b pb-4 mb-4">
                    <Chat
                        class="w-5 aspect-square fill-custom-color1"
                    />
                    <span>
                        {usersComments}
                    </span>
                </div>
                <div class="flex flex-col gap-6 mt-6 mb-0 md:mt-5 md:mb-10 md:px-20">
                    {
                        comments?.data?.map(item => <>
                            <div
                                class="bg-gray-100 rounded-lg p-5 grid grid-cols-1 gap-2 mx-1.5"
                                key={item.id}
                            >

                                <strong class="font-bold md:text-lg">
                                    {item?.name}
                                </strong>
                                <div class="text-gray-500 text-sm">
                                    <LocalizedDate
                                        locale={currentLocale?.key}
                                        utcDate={item?.utcDate}
                                    />
                                </div>
                                <p class="line-clamp-4">
                                    {item?.body}
                                </p>

                            </div>
                        </>)
                    }
                </div>
            </>
        }
    </>
}

export default Comments
