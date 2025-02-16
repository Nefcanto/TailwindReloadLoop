import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { merge } from "Base"

const RoutingAnimation = component$(({ class: internalClass }) => {

    return <>
        < div class={merge(`group relative mx-auto inline-flex items-center overflow-hidden transition`, internalClass)} >
            <div class="absolute inset-0 flex items-center [container-type:inline-size]">
                <div class="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(238,212,132)_0deg,transparent_80deg,transparent_400deg,rgba(0,0,0,0.5)_360deg)] opacity-0 transition duration-300 animate-[spin_4s_linear_infinite] group-hover:opacity-100"></div>
            </div>
            <div class="relative z-10 p-[3px]">
                <Slot />
            </div>
        </div>
    </>
})

export default RoutingAnimation
