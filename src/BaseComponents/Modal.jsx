import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { merge } from "Base"

const Modal = component$(({
    class: internalClass,
    closeClass,
    containerClass,
    isOpen,
}) => {

    return <div
        onClick$={() => isOpen.value = !isOpen.value}
        class={merge(`fixed z-50 top-0 start-0 w-screen h-screen bg-black/70 transition-all duration-300 ${isOpen.value ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"} ${containerClass}`)}
    >
        <div
            class={merge(`flex items-center justify-center w-8 aspect-square m-4 rounded-full text-xl font-bold bg-custom-color1 text-custom-color2 cursor-pointer ${closeClass}`)}
        >
            x
        </div>
        <div
            onClick$={e => e.stopPropagation()}
            class={merge(`max-w-full z-50 w-[500px] p-8 text-center bg-white rounded-lg mx-auto duration-500 delay-[1000000] transition-all ${isOpen.value ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"} ${internalClass}`)}
        >
            <Slot />
        </div>
    </div>
})

export default Modal
