import { component$ } from "@builder.io/qwik"
import { Message } from "Base"
import {
    LongText,
    Numeric,
    Text,
    useForm,
} from "Forms"
import { Loading } from "Svg"

const Form = component$(({
    fields,
    form,
}) => {
    const {
        email,
        message,
        name,
        phoneNumber,
    } = fields

    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
        progress,
    } = useForm({
        fields: form?.relatedItems?.fields,
        form
    })
    return <div class="relative z-20 border border-custom-color1 bg-white rounded-3xl px-5 py-7">
        <div class="relative z-10 font-bold text-lg md:text-xl mb-5 md:mb-10">{form.title}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <div>
                <Text
                    class="w-full bg-gray-100 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500"
                    modelBind={model}
                    placeholder={name?.placeholder}
                    property={name?.key}
                />
            </div>
            <div>
                <Numeric
                    class="w-full bg-gray-100 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500"
                    modelBind={model}
                    placeholder={phoneNumber?.placeholder}
                    property={phoneNumber?.key}
                />
            </div>
            <div class="sm:col-span-2 w-full">
                <LongText
                    rows="6"
                    class="resize-none w-full mt-2 bg-gray-100 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500 "
                    modelBind={model}
                    placeholder={message?.placeholder}
                    property={message?.key}

                />
            </div>
        </div>
        <div class="text-end">

            <button
                id="buttonSubmit"
                aria-label={form.ctaText}
                class={`${progress.value ? "bg-gray-300" : "bg-custom-color1"} text-custom-color2 rounded-xl px-10 py-3 hover:scale-110 hover:text-black transition-all duration-300`}
                onClick$={handleSubmit}
            >
                {
                    progress.value ?
                        <Loading class="animate-spin h-6 w-7" /> :
                        form.ctaText
                }
            </button>
        </div>
        {
            isMessageShown && <Message
                isSuccess={isSuccess.value}
                message={isSuccess.value ? form.successMessage : form.errorMessage}
            />
        }
    </div>
})

export default Form
