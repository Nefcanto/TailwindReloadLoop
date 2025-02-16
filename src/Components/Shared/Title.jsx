import { merge } from "Base"

const Title = ({
    class: internalClass,
    colorsInverted,
    text,
}) => {
    return <h2 class={merge(`text-center text-2xl lg:text-3xl font-black after:content-[""] after:block after:mx-auto after:mt-6 after:w-20 after:h-[6px] after:bg-custom-color1 after:rounded-lg ${colorsInverted ? "text-white" : "text-custom-color2"}`, internalClass)}>{text}</h2>
}

export default Title
