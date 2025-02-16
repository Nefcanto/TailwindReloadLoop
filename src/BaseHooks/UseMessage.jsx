import {
    $,
    useVisibleTask$,
    useContext,
} from "@builder.io/qwik"
import { AppContext } from "Base"

const useMessage = () => {

    const app = useContext(AppContext)

    useVisibleTask$(({ track }) => {
        track(() => app.isMessageShown)

        if (app.isMessageShown) {
            setTimeout(() => app.isMessageShown = false, 3_000)

        }
    }, { strategy: "document-ready" })

    const show = $((data, type) => {
        app.message = (data && data.message) ? data.message : data
        app.messageDescription = (data && data.description) ? data.description : undefined
        app.messageType = type
        app.isMessageShown = true
    })
    const success = $(data => {
        show(data, "success")
    })
    const info = $(data => {
        show(data, "info")
    })
    const warning = $(data => {
        show(data, "warning")
    })
    const error = $(data => {
        show(data, "error")
    })
    return {
        error,
        info,
        success,
        warning,
    }
}

export default useMessage
