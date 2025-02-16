import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import { Bars } from "Svg"
import { MobileMainMenu } from "Layout"

const Menu = component$(({
    contactInfo,
    cta,
    currentLocale,
    locales,
    menuItems,
    socialMedia,
}) => {

    const isOpen = useSignal(false)

    return <>
        <div class="w-full mx-auto basis-1/3 place-items-start">
            <div onClick$={() => isOpen.value = !isOpen.value}>
                <Bars class="w-8 h-8 text-custom-color2 font-bold focus:outline-none stroke-2 cursor-pointer" />
            </div>

            <MobileMainMenu
                contactInfo={contactInfo}
                cta={cta}
                currentLocale={currentLocale}
                isOpen={isOpen}
                locales={locales}
                menuItems={menuItems}
                socialMedia={socialMedia}
            />
        </div>
    </>
})

export default Menu
