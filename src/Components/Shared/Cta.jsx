import { component$ } from "@builder.io/qwik"
import { merge } from "Base"
import { Progress } from "Shared"
import {
    Left,
    Right,
} from "Svg"

const Cta = component$(({
    class: internalClass,
    colorsInverted,
    hasClickHandler,
    isRtl,
    link,
    progress,
    reverse,
    text,
    ...rest
}) => {
    const buttonStyle = merge(
        "mx-auto text-center flex items-center justify-center gap-1.5 px-8 py-1 rounded-full transition-all duration-500 border-[2px] text-custom-color2 bg-white border-custom-color1 hover:bg-custom-color1 hover:text-custom-color2 cursor-pointer",
        reverse ? " bg-white text-custom-color1 " : "",
        progress ? " bg-slate-100 text-slate-300 hover:bg-slate-100 hover:text-slate-300 cursor-disabled select-none " : "",
        internalClass
    )

    return <>
        {
            progress
                ?
                <div
                    class={buttonStyle}
                >
                    <span>{text}</span>
                    <Progress />
                </div>
                :
                hasClickHandler
                    ?
                    <button
                        class={buttonStyle}
                        {...rest}
                    >
                        {text}
                    </button>
                    :
                    <a
                        href={link}
                        class={buttonStyle}
                        aria-label={text}
                    >
                        {text}
                        {
                            isRtl
                                ?
                                <Right class={colorsInverted ? "fill-custom-color2 group-hover:fill-custom-color1 w-6 aspect-square" : ""} />
                                :
                                <Left class={colorsInverted ? "fill-custom-color2 group-hover:fill-custom-color1 w-6 aspect-square" : ""} />
                        }
                    </a>
        }

    </>
})

export default Cta
