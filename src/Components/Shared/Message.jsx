import { component$ } from "@builder.io/qwik"
import {
    Checked,
    Close,
} from "Svg"

const Message = component$(({
    isSuccess,
    message,
}) => {

    return <>
        <div class={`fixed z-50 top-10 start-10 flex gap-1 items-center text-sm border rounded-lg px-5 py-4 shadow-lg ${isSuccess ? " bg-green-50 text-green-700 border-green-200 " : " bg-red-50 text-red-700 border-red-100"}`}>
            {isSuccess ? <Checked class="w-4 aspect-square" /> : <Close class="w-4 aspect-square" />}
            {message}
        </div>
    </>
})

export default Message
