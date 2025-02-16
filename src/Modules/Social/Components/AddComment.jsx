import { component$ } from "@builder.io/qwik"
import { useComment } from "Social"
import {
    LongText,
    Text,
} from "Forms"
import { merge } from "Base"

const AddComment = component$(({
    body,
    buttonClass,
    containerClass,
    ctaText,
    entity,
    errorMessage,
    fieldClass,
    name,
    submit: textButton,
    successMessage,
    title,
    titleClass,
    ...rest
}) => {

    const {
        handleSubmit,
        model,
    } = useComment(entity)

    return <div class={merge("max-w-full w-[600px] flex flex-col gap-2 mx-auto mt-10 md:mt-12 mb-10 md:mb-20", containerClass)}>
        <div class={merge("font-bold text-lg mb-4 text-custom-color1", titleClass)}>
            {title}
        </div>
        <Text
            modelBind={model}
            property="Name"
            placeholder={name?.placeholder}
            class={merge("w-full bg-gray-100 rounded-sm px-3 py-2 placeholder:text-gray-500 focus:outline-hidden", fieldClass)}
        />
        <LongText
            modelBind={model}
            property="Body"
            placeholder={body?.placeholder}
            class={merge("w-full bg-gray-100 rounded-sm px-3 py-2 placeholder:text-gray-500 focus:outline-hidden", fieldClass)}
        />
        <div class="flex justify-end mt-1">
            <div
                class={merge("text-center font-bold px-6 py-2 rounded-sm bg-custom-color1 text-custom-color2 hover:bg-custom-color2 hover:text-custom-color1 cursor-pointer focus:outline-hidden transition-all", buttonClass)}
                onClick$={handleSubmit}
            >
                {ctaText || textButton}
            </div>
        </div>
    </div>
})

export default AddComment
