import { Left } from "Svg"

const LightBoxNavigation = ({
    items,
    name,
}) => {

    const navContainer = `prevent-close absolute z-50 top-[calc(50%-1.5rem)] transform -translate-y-1/2 flex flex-col justify-center items-center h-fit group overflow-hidden ${items.length == 1 && "hidden"}`
    const navIcon = "w-9 lg:w-12 h-auto aspect-square rounded bg-custom-color1 opacity-70 group-hover:opacity-100 fill-custom-color2 cursor-pointer border border-custom-color23 transition-all"

    return <>
        <div class={`${name}-next ${navContainer} end-1`} >
            <Left class={`${navIcon} ltr:rotate-180`} />
        </div>
        <div class={`${name}-prev ${navContainer} start-1`} >
            <Left class={`${navIcon} rotate-180`} />
        </div>
    </>
}

export default LightBoxNavigation
