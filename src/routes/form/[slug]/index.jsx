import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    Check,
    Date,
    File,
    Form,
    loadForm,
    LongText,
    MultiSelect,
    Numeric,
    Select,
    Text,
    useForm,
} from "Forms"
import { RichText } from "Shared"

const form = component$(() => {

    const data = loadForm().value

    if (data === 404) {
        return <NotFound />
    }

    const {
        content,
        form,
    } = data

    const {
        handleSubmit,
        model,
        ...rest
    } = useForm({
        fields: form?.relatedItems?.fields,
        form,
    })

    return <>
        <div class="relative max-w-full w-[560px] mx-auto px-5 mt-10 md:mt-20 bg-gray-200 rounded-md pb-2.5">
            <h1 class="text-center font-bold text-3xl form-title pt-12 mb-10">
                {form?.title}
            </h1>
            {
                form?.description &&
                <p class="form-description mt-4 mb-6">
                    {form?.description}
                </p>
            }
            <Form
                handleSubmit={handleSubmit}
                {...form}
                {...rest}
            >
                {
                    form?.relatedItems?.fields?.map(field => {
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
                                    choices={field?.relatedItems?.choices}
                                    modelBind={model}
                                    property={field.key}
                                />
                            case "multiChoice":
                                return <MultiSelect
                                    {...field}
                                    choices={field?.relatedItems?.choices}
                                    modelBind={model}
                                    property={field.key}
                                />
                            case "boolean":
                                return <Check
                                    {...field}
                                    modelBind={model}
                                    property={field.key}
                                />
                            case "numeric":
                            case "realNumber":
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
                            case "date":
                                return <Date
                                    {...field}
                                    modelBind={model}
                                    property={field.key}
                                />
                            default:
                                return <div>No field for {field.dataType}</div>
                                break
                        }
                    })
                }
            </Form>
            <div class="mt-14 mb-20 leading-8">
                <RichText content={content} />
            </div>
        </div>
    </>
})

export default form

export { loadForm }

const head = ({ resolveValue }) => {
    return useSeo(loadForm, resolveValue)
}

export { head }
