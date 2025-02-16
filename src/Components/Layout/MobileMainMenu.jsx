import {
    $,
    component$,
} from "@builder.io/qwik"
import { Backdrop } from "Shared"
import { MobileMenu } from "Layout"
import { Close } from "Svg"

const MobileMainMenu = component$(({
    currentLocale,
    isOpen,
    locales,
    menuItems,
    socialMedia,
}) => {

    const closeMenuHandler = $(() => {
        isOpen.value = !isOpen.value
    })

    return <>
        {isOpen.value &&
            <Backdrop click={closeMenuHandler} />
        }

        <div class={`w-[90%] max-w-[300px] fixed z-50 bg-gray-50 top-0 start-0 min-h-screen transition duration-500 ${isOpen.value ? "translate-x-0 ltr:-translate-x-0" : "translate-x-full ltr:-translate-x-full"} `}>

            <div class="py-3 px-3 border-b-[.5px] border-dotted border-slate-50 flex justify-between"
                onClick$={() => isOpen.value = false}
            >
                <Close class="w-8 aspect-square text-custom-color1 focus:outline-none stroke-2" />

            </div>

            <div class="flex items-center justify-center mb-5">
                <div class="flex gap-5 justify-center items-center px-5 border-t-dotted border-gray-200">
                    {
                        socialMedia?.items?.filter(item => item?.isActive === "True").map(item => {
                            return <a
                                href={item.slug}
                                key={item.id}
                                target="_blank"
                            >
                                <div
                                    class="flex items-center justify-center w-8 aspect-square bg-custom-color1 rounded-full [&>svg]:h-5 [&>svg]:mx-auto [&>svg]:fill-custom-color2 hover:animate-wave"
                                    dangerouslySetInnerHTML={item.icon}
                                />
                            </a>
                        })
                    }
                </div>
            </div>

            <ul class="absolute w-full h-[500px] overflow-y-scroll">
                {
                    menuItems?.map((item, index) => <div key={item.id}>
                        <MobileMenu
                            index={index}
                            isOpen={isOpen}
                            item={item}
                        />
                    </div>)
                }
            </ul>

        </div>
    </>

})

export default MobileMainMenu
