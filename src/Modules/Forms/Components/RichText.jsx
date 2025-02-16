import { component$ } from "@builder.io/qwik"
import {
    Check,
    File,
    Form as FormWrapper,
    LongText,
    MultiSelect,
    Numeric,
    Select,
    Text,
    useForm,
} from "Forms"
import { RichText } from "Shared"

const Form = component$(({
    forms,
    slug
}) => {
    const form = forms?.find(form => form.slug === slug)

    const {
        handleSubmit,
        model,
        ...rest
    } = useForm({
        fields: form?.relatedItems?.fields,
        form,
    })
    return <div>
        <div class="relative max-w-full w-[560px] mx-auto px-5 mt-10 md:mt-20 bg-gray-200 rounded-md">
            <h2 class="text-center font-bold text-3xl form-title pt-12 mb-10">
                {form?.title}
            </h2>
            {
                form?.description &&
                <p class="form-description mt-4 mb-6">
                    {form?.description}
                </p>
            }
            <FormWrapper
                handleSubmit={handleSubmit}
                {...form}
                {...rest}
            >
                {form?.relatedItems?.fields?.map(field => {
                    switch (field.dataType) {
                        case "text":
                            return <Text
                                {...field}
                                modelBind={model}
                                property={field.key}
                            />
                        case "longText":
                            return <LongText
                                {...field}
                                modelBind={model}
                                property={field.key}
                            />
                        case "singleChoice":
                            return <Select
                                {...field}
                                modelBind={model}
                                choices={field?.relatedItems?.choices}
                                property={field.key}
                            />
                        case "multiChoice":
                            return <MultiSelect
                                {...field}
                                modelBind={model}
                                choices={field?.relatedItems?.choices}
                                property={field.key}
                            />
                        case "boolean":
                            return <Check
                                {...field}
                                modelBind={model}
                                property={field.key}
                            />
                        case "numeric":
                            return <Numeric
                                {...field}
                                modelBind={model}
                                property={field.key}
                            />
                        case "file":
                            return <File
                                {...field}
                                modelBind={model}
                                property={field.key}
                            />
                        default:
                            break
                    }
                })}
            </FormWrapper>
            <div class="mt-4 mb-6 pb-6">
                <RichText content={form?.relatedItems?.content} />
            </div>
        </div>
    </div>
})

export default Form
