import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { MobileSecondSubMenu } from "Layout"
import {
    Add,
    Remove,
} from "Svg"

const MobileSubMenu = component$(({
    isOpenSubMenu,
    items,
}) => {

    const isOpenSecondSubMenu = useSignal(false)

    return <>
        <ul class={`${isOpenSubMenu.value ? "block " : "hidden "} p-0 bg-gray-100 w-full`}>
            {
                items?.map(item => <div key={item.id}>
                    <li class="flex justify-between items-center pe-5 ps-8 py-2 border-dashed border-b border-gray-300 last:border-0 text-sm">
                        <a href={item.url ?? "#"}>
                            {item.title}
                        </a>
                        {
                            item.hasChildren &&
                            <div
                                onclick$={() => isOpenSecondSubMenu.value = !isOpenSecondSubMenu.value}
                                class="w-5 aspect-square flex justify-center items-center bg-custom-color2 rounded-full"
                            >
                                {
                                    isOpenSecondSubMenu.value
                                        ?
                                        <Remove class="w-4 aspect-square fill-custom-color31" />
                                        :
                                        <Add class="w-4 aspect-square text-2xl fill-custom-color31" />
                                }
                            </div>
                        }
                    </li>
                    {
                        item.hasChildren &&
                        <MobileSecondSubMenu
                            isOpenSecondSubMenu={isOpenSecondSubMenu}
                            items={item.children}
                        />
                    }
                </div>)
            }
        </ul>
    </>

})

export default MobileSubMenu
