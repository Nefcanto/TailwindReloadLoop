import {
    $,
    component$,
    Slot,
    useSignal,
} from "@builder.io/qwik"
import { Form } from "@builder.io/qwik-city"
import { useSignOut } from "Accounts"

const SignOut = component$(({
    progress: ProgressComponent,
    returnTo,
}) => {

    const signOut = useSignOut()
    const progress = useSignal(false)
    const handleClick = $(() => {
        progress.value = true
        signOut.submit()
    })

    return progress.value
        ?
        ProgressComponent
            ?
            <ProgressComponent />
            :
            <span>...</span>
        :
        <div action={signOut}>
            <input
                type="hidden"
                name="callbackUrl"
                value={returnTo || "/"}
            />
            <div onClick$={handleClick}>
                <Slot />
            </div>
        </div>
})

export default SignOut
