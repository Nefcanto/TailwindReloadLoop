import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import {
    Add,
    Remove,
} from "Svg"
import { MobileSubMenu } from "Layout"

const MobileMenu = component$(({
    index,
    isOpen,
    item,
}) => {

    const isOpenSubMenu = useSignal(false)

    return <>
        <li class="px-5 py-3 flex justify-between items-center border-t border-dotted border-custom-color1">
            <a
                class={`w-fit text-sm text-custom-color2 hover:text-custom-color1 font-bold duration-1000 py-1 after:absolute after:content-[""] after:bg-custom-color1 after:bottom-0 after:start-0 after:w-0 after:h-[2px] hover:after:w-full after:transition-all after:duration-700 delay-[${index * 1_000_000}ms] ${isOpen.value ? "translate-x-0 ltr:-translate-x-0" : "translate-x-[100vw] ltr:-translate-x-[100vw]"}`}
                href={item.url}
            >
                {item.title}
            </a>
            {
                item.hasChildren && <>
                    <div onclick$={() => isOpenSubMenu.value = !isOpenSubMenu.value}>
                        {
                            isOpenSubMenu.value
                                ?
                                <Remove class="w-4 aspect-square cursor-pointer fill-custom-color31" />
                                :
                                <Add class="w-4 aspect-square cursor-pointer text-2xl fill-custom-color31" />
                        }
                    </div>
                </>
            }
        </li>
        {
            item.hasChildren && <MobileSubMenu
                isOpenSubMenu={isOpenSubMenu}
                items={item.children}
            />
        }
    </>
})

export default MobileMenu
