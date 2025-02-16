import {
    $,
    useSignal,
} from "@builder.io/qwik"
import { postWithAuthentication } from "Base"
import { useSession } from "Accounts"

const useProfile = () => {
    const isOpen = useSignal(false)
    const progress = useSignal(false)
    const session = useSession()

    const model = useSignal({
        name: "",
        nationalIdentificationNumber: ""
    })

    const updateProfile = $(async () => {
        progress.value = true
        const result = await postWithAuthentication("/person/update", model.value, session)
        progress.value = false
        window.location.reload()
        return result.data
    })

    return {
        isOpen,
        model,
        progress,
        updateProfile
    }

}

export default useProfile
