import { component$ } from "@builder.io/qwik"
import { useComment } from "Social"
import {
    LongText,
    Text,
} from "Forms"
import { Message } from "Base"

const AddComment = component$(({
    body,
    ctaText,
    entity,
    errorMessage,
    name,
    successMessage,
    title,
}) => {

    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
    } = useComment(entity)

    return <>
        <div class="relative flex flex-col gap-2 mt-10 mb-10 md:mb-20">
            <div class="font-black text-lg mx-0 md:mx-20 border-b pb-4 mb-4">
                <span>
                    {title}
                </span>
            </div>
            <div class="px-0 md:px-32">
                <Text
                    class="w-full mt-2 border border-gray-300 rounded-xl px-5 py-3 focus:outline-hidden placeholder-gray-500"
                    modelBind={model}
                    placeholder={name?.placeholder}
                    property="Name"
                />
                <LongText
                    class="w-full mt-2 border border-gray-300 rounded-xl px-5 py-3 focus:outline-hidden placeholder-gray-500"
                    modelBind={model}
                    placeholder={body?.placeholder}
                    property="Body"
                />
                <div class="flex justify-end mt-1">
                    <span
                        class="font-bold px-6 py-2 text-sm md:text-base rounded-md bg-custom-color1 text-custom-color2 hover:bg-custom-color2 hover:text-custom-color1 transition-all"
                        href="/"
                        onClick$={handleSubmit}
                    >
                        {ctaText}
                    </span>
                </div>
            </div>
            {/* {
                isMessageShown.value &&
                <Message
                    isSuccess={isSuccess.value}
                    message={isSuccess.value ? successMessage : errorMessage}
                />
            } */}

        </div>
    </>
})

export default AddComment
