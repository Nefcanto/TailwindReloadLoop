import { merge } from "Base"
import { Shopping } from "Svg"

const CartButton = ({
    icon,
    iconContainer,
    title,
    titleClass,
}) => {
    return <>
        {
            title && <>
                <p class={merge("bg-custom-color1 rounded-full ps-1.5 pe-7 sm:ps-2.5 -me-6 text-custom-color2 font-medium text-xs xl:text-sm py-2", titleClass)}>
                    {title}
                </p>
            </>
        }
        <div class={merge("flex items-center justify-center aspect-square bg-white rounded-full shadow-lg w-11", iconContainer)}>
            {icon ?? <Shopping class="w-6 aspect-square fill-custom-color2" />}
        </div>
    </>
}

export default CartButton
