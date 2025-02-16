import {
    $,
    useSignal
} from "@builder.io/qwik"
import {
    post,
    upload,
    useMessage,
} from "Base"

const useForm = ({
    fields,
    form,
}) => {

    const model = useSignal({})
    const progress = useSignal(false)
    const fileFields = useSignal({})
    const hasFile = useSignal(false)
    const {
        error,
        success,
    } = useMessage()

    fields?.map((field, index) => {
        if (field?.dataType == "file") {
            hasFile.value = true
            fileFields.value[field.key] = ""
        }
        else {
            model.value[field.key] = ""
        }
    })

    const resetFields = $(() => {
        model.value = {}
    })

    const handleSubmit = $(async () => {
        if (progress.value === true) {
            return
        }
        progress.value = true
        let url = form.ctaLink
        let data = hasFile.value ? new FormData() : {}
        if (!url) {
            url = `/form/save?key=${form.key}`
        }
        Object.keys(fileFields.value).map(key => {
            const files = window[key]
            for (let i = 0; i < files.length; i++) {
                data.append(key, files[i])
            }

        })
        Object.keys(model.value).map(key => {
            if (hasFile.value) {
                data.append(key, model.value[key])
            } else {
                data[key] = model.value[key]
            }
        })
        const method = hasFile.value ? upload : post
        await method(url, data).then(data => {
            resetFields()
            progress.value = false
            success(form.successMessage || data)
        }, e => {
            progress.value = false
            console.log(e)
            error(form.errorMessage || e)
        })
    })

    return {
        handleSubmit,
        model,
        progress: progress.value,
    }
}

export default useForm
