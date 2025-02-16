import { component$ } from "@builder.io/qwik"
import { merge } from "Base"
import {
    Close,
    RotateLeft,
} from "Svg"

const LightBoxTools = component$(({
    activeImageInfo,
    click,
    handleRotate,
}) => {

    const svgStyle = "w-6 aspect-square fill-custom-color21 stroke-custom-color21 hover:fill-custom-color32 transition-color cursor-pointer"

    return <>
        <div
            class="w-[calc(100%-12px)] flex flex-row my-1.5 py-2 px-2 mx-auto border border-custom-color21 bg-custom-color2/30 rounded shadow cursor-auto"
            onClick$={e => e.stopPropagation()}
        >
            <div class="flex flex-row gap-1.5 sm:gap-2">
                <Close
                    class={merge(svgStyle, "w-7 hover:fill-custom-color4 cursor-pointer")}
                    onClick$={click}
                />
                <RotateLeft
                    class={svgStyle}
                    onClick$={() => handleRotate(1)}
                />
                <RotateLeft
                    class={merge(svgStyle, "scale-x-[-1]")}
                    onClick$={() => handleRotate(-1)}
                />
            </div>
            <p class="ms-auto font-semibold text-custom-color23">
                {activeImageInfo}
            </p>
        </div>
    </>
})

export default LightBoxTools
