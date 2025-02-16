import {
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import {
    getRandomId,
    merge,
} from "Base"

const CircularProgress = component$(({
    containerClass,
    progress,
    strokeWidth,
    title,
    titleClass,
}) => {

    const id = getRandomId()
    const size = useSignal(100)
    const radius = (size.value / 2) - 10
    const circumference = Math.PI * 2 * radius
    const offset = circumference * ((100 - progress) / 100)

    useVisibleTask$(({ cleanup }) => {
        size.value = document.getElementById(id)?.offsetWidth
    })

    return <>
        <div
            class={merge("relative block", containerClass)}
            id={id}
        >
            <div class="flex justify-center items-center w-full h-full absolute z-10 text-center">
                <div class="text-lg text-gray-500">
                    {progress}%
                </div>
            </div>
            <div class="-rotate-90 w-full h-full">
                <svg
                    class="[&>circle]:fill-transparent w-full h-full"
                    viewBox={`-${size.value * 0.125} -${size.value * 0.125} ${size.value * 1.25} ${size.value * 1.25}`}
                >
                    <circle
                        class="stroke-gray-300"
                        cx={size.value / 2}
                        cy={size.value / 2}
                        r={(size.value / 2) - 10}
                        stroke-width={strokeWidth}
                    />
                    <circle
                        class="stroke-green-500"
                        cx={size.value / 2}
                        cy={size.value / 2}
                        r={(size.value / 2) - 10}
                        stroke-dasharray={circumference + "px"}
                        stroke-dashoffset={offset + "px"}
                        stroke-width={strokeWidth}
                    />
                </svg>
            </div>
        </div>
        <p class={`${titleClass}`}>{title}</p>
    </>
})

export default CircularProgress
