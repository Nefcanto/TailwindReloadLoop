import { merge } from "Base"
import { Left } from "Svg"

const MoreDetailsButton = ({
    containerClass,
    iconClass,
    link,
    linkClass,
    moreDetails,
}) => {

    return moreDetails && <>
        <div class={merge("relative group/more font-bold h-fit w-full select-none px-1.5", containerClass)}>
            <div class="flex items-center justify-center py-1">
                <a
                    class={merge("inline-flex items-center gap-2 group-hover/more:bg-custom-color1 text-custom-color2 transition-all duration-300 rounded-lg ps-2.5", linkClass)}
                    href={link}
                >
                    {moreDetails}
                    <Left class={merge("group-hover/more:rotate-[360deg] ltr:rotate-180 transition-all duration-300 bg-custom-color1 rounded-full block w-7 h-7 fill-custom-color2", iconClass)} />
                </a>
            </div>
        </div>
    </>
}

export default MoreDetailsButton
