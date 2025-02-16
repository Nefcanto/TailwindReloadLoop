import {
    $,
    useSignal,
} from "@builder.io/qwik"
import {
    post,
    useMessage
} from "Base"

const useComment = entity => {

    if (!entity) {
        throw new Error("Entity is null or undefined")
    }
    const model = useSignal({
        body: "",
        email: "",
        entity: entity.guid,
        entityType: entity.relatedItems.entityType,
        module: entity.relatedItems.module,
        name: "",
        website: "",
    })
    const {
        error,
        success,
    } = useMessage()

    const progress = useSignal(false)
    const resetFields = $(() => {
        model.value = {
            body: "",
            email: "",
            entity: entity.guid,
            entityType: entity.relatedItems.entityType,
            module: entity.relatedItems.module,
            name: "",
            website: "",
        }
    })
    const handleSubmit = $(async () => {
        progress.value = true
        await post("/comment/save", model.value).then(data => {
            progress.value = false
            success(data)
            resetFields()
        }, e => {
            error(e)
            progress.value = false
        })
    })
    return {
        handleSubmit,
        model,
        progress,
        resetFields,
    }
}

export default useComment
