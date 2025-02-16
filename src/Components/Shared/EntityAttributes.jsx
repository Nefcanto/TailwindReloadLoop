import { merge } from "Base"
import {
    Check,
    Close,
} from "Svg"

const EntityAttributes = ({
    entityAttributes,
    isCompact,
    hasEntityAttributes,
    attributesTitle,
}) => {

    const maxItemsToShow = 4
    const displayedAttributes = entityAttributes?.slice(0, isCompact ? maxItemsToShow : entityAttributes.length)
    const attributeValue = value => {
        switch (value) {
            case "True": return <Check class="w-6 h-6 fill-custom-color5" />
            case "False": return <Close class="w-6 h-6 fill-custom-color4/80" />
            default: return value
        }
    }

    return hasEntityAttributes && <>
        {
            attributesTitle && <>
                <p class={merge("text-start text-custom-color2", isCompact ? "mb-1.5 lg:mb-2" : "mt-5 mb-3 sm:mb-5")}>
                    <strong>
                        {attributesTitle}
                    </strong>
                </p>
            </>
        }
        {
            displayedAttributes?.map((item, index) => <dl
                class={merge("flex items-center rounded-xs", isCompact ? "gap-1.5 py-1 text-sm ps-3" : "gap-2.5 md:gap-5 lg:gap-8 mx-5 lg:mx-8 py-2 ps-5 lg:ps-8", index % 2 == 0 && !isCompact && "bg-custom-color24/40")}
                key={item.id}
            >
                <dt class={merge("font-semibold", isCompact ? "text-custom-color2/95" : "w-24 sm:w-36 shrink-0 text-custom-color2")}>
                    {item.title}
                    {isCompact && ":"}
                </dt>
                <dd class="text-custom-color2/85 flex items-center gap-0.5 flex-wrap">
                    {attributeValue(item.value)}
                </dd>
            </dl>)
        }
    </>
}

export default EntityAttributes
