import { component$ } from "@builder.io/qwik"
import { useComment } from "Social"
import {
    LongText,
    Text,
} from "Forms"
import { Message } from "Shared"

const AddComment = component$(({
    body,
    ctaText,
    email,
    entity,
    errorMessage,
    name,
    submit: textButton,
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
        <div class="w-full max-w-3xl mx-auto my-10 md:mb-20">

            <p class="font-bold text-lg md:text-xl mb-6">
                {title}
            </p>

            <div class="flex flex-col sm:flex-row sm:gap-4">
                <div class="w-full">
                    <Text
                        class="w-full bg-gray-100 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500"
                        modelBind={model}
                        property="Name"
                        placeholder={name?.placeholder}
                    />
                </div>
                <div class="w-full">
                    <Text
                        type="mail"
                        class="w-full bg-gray-100 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500"
                        modelBind={model}
                        placeholder={email?.placeholder}
                        property={email?.key}
                    />
                </div>
            </div>
            <div class="w-full">
                <LongText
                    class="w-full bg-gray-100 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500 md:mt-2"
                    modelBind={model}
                    property="Body"
                    placeholder={body?.placeholder}
                />
            </div>
            <div class="flex justify-end mt-1">
                <p
                    class="bg-custom-color1 text-custom-color2 rounded-xl px-10 py-3 cursor-pointer hover:scale-110 hover:text-black transition-all duration-300"
                    onClick$={handleSubmit}
                >
                    {ctaText || textButton}
                </p>
            </div>

            {
                isMessageShown && <Message
                    isSuccess={isSuccess.value}
                    message={isSuccess.value ? successMessage : errorMessage}
                />
            }

        </div>
    </>
})

export default AddComment
