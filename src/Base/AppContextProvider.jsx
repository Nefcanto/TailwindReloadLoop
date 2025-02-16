import {
    component$,
    Slot,
    useContextProvider,
    useStore,
} from "@builder.io/qwik"
import { AppContext } from "Base"

const AppContextProvider = component$(() => {
    const app = useStore({
        Qwik: "Qwik context is ready to use",
    })
    useContextProvider(AppContext, app)

    return (
        <>
            <Slot />
        </>
    )
})

export default AppContextProvider
