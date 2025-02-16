import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { merge } from "Base"

const TabOption = component$(({
    class: internalClass,
    click,
    name,
    selected,
}) => {

    return <li
        class={merge("hover:text-custom-color2 z-10 me-1 cursor-pointer rounded-lg border-2 bg-white px-1 py-2 font-semibold transition-all sm:p-2.5 md:me-2 md:rounded-none md:rounded-t-lg md:border-b-0 md:px-3 md:pt-4 xl:px-5", selected ? `text-custom-color2 bg-custom-color23 border-custom-color1 after:bg-custom-color23 translate-x-0 rounded-t-lg after:absolute after:-bottom-1 after:start-0 after:z-10 after:h-[4px] after:w-full after:content-[""] ltr:-translate-x-0` : "md:text-custom-color22 border-custom-color1 shadow-[0_0_1rem_0_rgba(0,0,0,0.149)] md:border-white md:bg-transparent md:shadow-none", internalClass)}
        id={name}
        onClick$={() => click(name)}
        type="button"
    >
        <Slot />
    </li>
})

export default TabOption
