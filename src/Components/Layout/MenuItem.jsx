import {
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import { SubMenu } from "Layout"

const MenuItem = component$(({
    isMenuOpen,
    item,
    subMenuButton,
}) => {

    const isSubMenuOpen = useSignal(false)

    useVisibleTask$(({ track }) => {
        track(() => isMenuOpen.value)
        if (!isMenuOpen.value) {
            isSubMenuOpen.value = false
        }
    }, { strategy: "document-ready" })
    return <>

        <div
            onMouseEnter$={() => isSubMenuOpen.value = true}
            onMouseLeave$={() => isSubMenuOpen.value = false}
            class={`flex flex-row gap-2 justify-between items-center w-full ${isSubMenuOpen.value ? "" : ""}`}
        >
            <a
                href={item.url}
                class="flex flex-col transition-all duration-200 hover:translate-x-[-1rem] cursor-pointer px-5"
            >
                <p class="text-xl font-bold text-gray-600 bg-right-bottom bg-gradient-to-r from-custom-color1 to-custom-color1 bg-[length:0%_0px] bg-no-repeat py-2 hover:bg-[length:100%_4px] hover:text-custom-color2 hover:bg-right-bottom transition-all duration-500">{item.title}</p>
            </a>
            {/* <div class="md:hidden">
                {
                    item.relatedItems.children.length > 0 &&
                    <div class="mx-auto text-xl" oneClick$={() => isSubMenuOpen.value = !isSubMenuOpen.value}>
                        <div
                            class="mx-auto text-3xl text-custom-color1"
                            oneClick$={() => isSubMenuOpen.value = !isSubMenuOpen.value}
                        >
                            <span>{isSubMenuOpen.value ? <span>-</span> : <span>+</span>}</span>

                        </div>
                    </div>
                }
            </div> */}
            {
                item?.children && item?.children?.length > 0 &&
                <SubMenu
                    isSubMenuOpen={isSubMenuOpen}
                    items={item?.children}
                    button={subMenuButton}
                />
            }
        </div>
    </>
})

export default MenuItem
