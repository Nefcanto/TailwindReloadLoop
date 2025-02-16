import {
    component$,
} from "@builder.io/qwik"
import {
    HeaderOffset,
    SubMenuItem,
} from "Layout"

const SubMenu = component$(({
    button,
    isSubMenuOpen,
    items,
}) => {

    return <> <div
        class={` z-30 md:-z-20 fixed w-full top-0 bottom-0 start-0 bg-white shadow-[inset_0_0_2rem_rgba(0,0,0,.149)] transition-all duration-500 ${isSubMenuOpen.value ? "translate-x-0 md:-translate-x-full" : "translate-x-full"}`}
    >
        <HeaderOffset />
        <div class={`${isSubMenuOpen.value ? "fixed p-2 md:hidden bg-white shadow-[0_0_2.5rem_0_rgba(0,0,0,.149)] w-full" : "hidden"}`}>
            <div
                onClick$={e => isSubMenuOpen.value = false}
                class="px-4 text-lg font-extrabold cursor-cell"
            >
                {button.subMenuButtonText}
            </div>
        </div>
        <div class="flex flex-col justify-start items-start px-3 gap-3 mt-16">
            {
                items?.map(item => <SubMenuItem
                    item={item}
                    key={item.id}
                />)
            }
        </div>
    </div>
    </>
})

export default SubMenu
