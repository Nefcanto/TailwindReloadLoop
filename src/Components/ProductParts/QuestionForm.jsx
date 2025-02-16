import { component$ } from "@builder.io/qwik"
import {
    merge,
    Message,
} from "Base"
import {
    Hidden,
    LongText,
    Text,
    useForm,
} from "Forms"
import { Loading } from "Svg"

const QuestionForm = component$(({
    fields,
    form,
    entityGuid: ProductEntityGuid,
}) => {
    const {
        content,
        entityGuid,
        entityType,
        title,
    } = fields

    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
        progress,
    } = useForm({
        fields: form?.relatedItems?.fields,
        form: form,
    })

    const fieldStyle = "w-full bg-gray-100 rounded px-3 py-2 placeholder:text-gray-500 focus:outline-none"

    return <>
        <div class="m-2 lg:mx-2 my-3 md:my-5 sm:max-w-[85%] sm:mx-auto lg:max-w-full">
            <div class="flex flex-col gap-2 max-w-lg mx-auto">
                <p class="font-bold text-lg md:mb-3">
                    {form?.title}
                </p>
                <Text
                    class={fieldStyle}
                    modelBind={model}
                    placeholder={title?.placeholder}
                    property={title?.key}
                    type="text"
                />
                <LongText
                    class={fieldStyle}
                    modelBind={model}
                    placeholder={content?.placeholder}
                    property={content?.key}
                />
                <div>
                    <Hidden
                        modelBind={model}
                        placeholder={entityGuid?.placeholder}
                        property={entityGuid?.key}
                        value={ProductEntityGuid}
                    />
                    <Hidden
                        modelBind={model}
                        placeholder={entityType?.placeholder}
                        property={entityType?.key}
                        value="products"
                    />

                </div>
                <div class="text-end -mt-3">
                    <button
                        aria-label={form?.ctaText}
                        class={merge(progress.value ? "bg-white" : "bg-custom-color1", "border-custom-color1 hover:bg-white cursor-pointer rounded border-2 px-6 py-2 text-center font-bold transition-all focus:outline-none lg:text-xl")}
                        onClick$={handleSubmit}
                    >
                        {
                            progress.value
                                ?
                                <Loading class="w-5 aspect-square animate-spin mx-auto" />
                                :
                                form?.ctaText
                        }
                    </button>
                </div>
            </div>
            {
                isMessageShown && <Message
                    isSuccess={isSuccess.value}
                    message={isSuccess.value ? form?.successMessage : form?.errorMessage}
                />
            }
        </div>
    </>
})

export default QuestionForm
