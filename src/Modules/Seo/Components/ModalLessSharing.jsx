import {
    component$,
    Slot,
    useSignal,
} from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import {
    Copy,
    Envelop,
    merge,
    Telegram,
    WhatsApp,
} from "Base"

const ModalLessSharing = component$(({
    containerClass,
    iconClass,
    iconsContainerClass,
    iconsTitleClass,
    title,
    titleClass,
}) => {

    const { url } = useLocation()

    return <>
        <div class={merge("flex flex-col gap-3 my-4 text-center ", containerClass)}>
            <div class={merge("font-bold ", titleClass)}>
                {title}
            </div>
            <div class={merge("flex items-center justify-center gap-7 p-4 bg-gray-100 ", iconsContainerClass)}>
                <a
                    aria-label="Telegram"
                    class="group flex flex-col items-center justify-center gap-y-3 text-black hover:text-custom-color1 transition-all group"
                    href={`https://telegram.me/share/url?url=${url?.href}`}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Telegram class={merge("w-8 aspect-square fill-custom-color2 group-hover:fill-custom-color1 transition-all ", iconClass)} />
                    <p class={merge("text-xs font-semibold ", iconsTitleClass)}>Telegram</p>
                </a>
                <a
                    aria-label="WhatsApp"
                    class="group flex flex-col items-center justify-center gap-y-3 text-black hover:text-custom-color1 transition-all group"
                    href={`whatsapp://send/?text=${title}:${url?.href}`}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <WhatsApp class={merge("w-8 aspect-square fill-custom-color2 group-hover:fill-custom-color1 transition-all ", iconClass)} />
                    <p class={merge("text-xs font-semibold ", iconsTitleClass)}>WhatsApp</p>
                </a>
                <a
                    aria-label="Email"
                    class="group flex flex-col items-center justify-center gap-y-3 text-black hover:text-custom-color1 transition-all group"
                    href={`mailto:?subject=${title}&body=${url?.href}`}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Envelop class={merge("w-8 aspect-square fill-custom-color2 group-hover:fill-custom-color1 transition-all ", iconClass)} />
                    <p class={merge("text-xs font-semibold ", iconsTitleClass)}>Email</p>
                </a>
                <div
                    class="group flex flex-col items-center justify-center gap-y-3 cursor-pointer"
                    onClick$={() => {
                        navigator.clipboard.writeText(url?.href)
                        alert(`Copied in clipboard`)
                    }}
                >
                    <Copy class={merge("w-8 aspect-square fill-custom-color2 group-hover:fill-custom-color1 transition-all ", iconClass)} />
                    <p class={merge("text-xs font-semibold ", iconsTitleClass)}>Copy</p>
                </div>
            </div>
        </div>
    </>
})

export default ModalLessSharing
