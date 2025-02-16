import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { merge } from "Base"
import ChevronDown from "./ChevronDown"

const Accordion = component$(({
    arrowClass,
    clickHandler,
    containerClass,
    isOpen,
    item,
    title,
}) => {

    return <div
        onClick$={() => clickHandler(item.id)}
        class={`${containerClass} my-2 w-full shadow-sm rounded-lg flex flex-col`}
    >
        <div class={`w-full py-2 ps-4 pe-3 flex items-center justify-between fill-white cursor-pointer`}>
            <span class="font-bold text-sm md:text-base py-3">
                {title}
            </span>
            <ChevronDown class={merge(`w-6 fill-gray-600 ${isOpen ? " rotate-180 " : " "}`, arrowClass)} />
        </div>
        <div class={`px-4 overflow-hidden transition-all ${isOpen ? "max-h-[50vh] duration-1000" : "max-h-0 duration-1000"}`}>
            <div class="pb-6 text-sm">
                <Slot />
            </div>
        </div>
    </div>
})

export default Accordion
