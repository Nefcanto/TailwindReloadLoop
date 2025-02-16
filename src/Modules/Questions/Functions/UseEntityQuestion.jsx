import {
    $,
    useSignal,
} from "@builder.io/qwik"
import {
    post,
    useMessage
} from "Base"

const useEntityQuestion = (entityType, entityGuid) => {

    const model = useSignal({
        title: "",
        content: "",
        entityGuid: entityGuid,
        entityType: entityType,
    })

    const progress = useSignal(false)

    const resetFields = $(() => {
        model.value = {
            title: "",
            content: "",
            entityGuid: entityGuid,
            entityType: entityType,
        }
    })

    const handleSubmit = $(async () => {
        progress.value = true
        await post("/entityQuestion/add", model.value).then(data => {
            progress.value = false
            resetFields()
        }, e => {
            progress.value = isSuccess.value = false
        })
    })

    return {
        handleSubmit,
        model,
        progress,
        resetFields,
    }
}

export default useEntityQuestion
