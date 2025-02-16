import {
    $,
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import {
    ExpandMore,
    merge,
} from "Base"

const Toc = component$(({
    closedByDefault,
    containerClass,
    headingClass,
    headingTwoElements,
    itemsClass,
    scrollMarginTop,
    title,
}) => {

    const isOpen = useSignal(closedByDefault ? false : true)

    const scrollToHeading = $(heading => {
        const headingElement = document.getElementById(heading.attributes?.find(i => i.name == "id").value)
        headingElement.style.scrollMarginTop = (scrollMarginTop || "100px")
        headingElement.scrollIntoView({ behavior: "smooth" })
    })

    return headingTwoElements.length > 0 && <div class={merge("p-4", containerClass)}>
        <div
            class={merge("relative z-10 cursor-pointer w-full bg-custom-color1 rounded-lg p-2 text-black font-bold flex items-center justify-between", headingClass)}
            onClick$={() => isOpen.value = !isOpen.value}
        >
            {title || "Table of Contents"}
            <ExpandMore class={`w-6 aspect-square transition-all duration-500 ${isOpen.value && "rotate-180"}`} />
        </div>
        <ul class={`bg-custom-color1/20 transition-all duration-500 overflow-hidden rounded-b-lg ${isOpen.value ? "-mt-4 pt-6 max-h-[200vh]" : "max-h-0"}`}>
            {
                headingTwoElements?.map((element, index) => <li
                    class={merge("hover:bg-white/20 transition-all duration-500 cursor-pointer w-full p-2 text-gray-800 font-semibold text-sm no-underline", itemsClass)}
                    key={index + 1}
                    onClick$={() => scrollToHeading(element)}
                >
                    <a href={`#${element.attributes?.find(i => i.name == "id").value}`}>
                        &bull; {element?.children?.[0]?.text}
                    </a>
                </li>
                )
            }
        </ul>
    </div>
})

export default Toc
