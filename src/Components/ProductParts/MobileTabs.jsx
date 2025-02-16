import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { Close } from "Svg"

const MobileTabs = component$(({
    isModalOpen,
    title,
}) => {

    return isModalOpen.value && <>
        <div class="fixed inset-0 z-50 bg-white flex flex-col">
            <div class="flex items-center justify-between p-4 bg-custom-color21 shadow-xl z-20">
                <p class="text-lg font-bold">
                    {title}
                </p>
                <Close
                    class="w-8 aspect-square focus:outline-none stroke-2 fill-custom-color4"
                    onClick$={() => isModalOpen.value = false}
                />
            </div>
            <div class="flex-1 overflow-y-auto p-4">
                <Slot />
            </div>
        </div>
    </>
})

export default MobileTabs

