import {
    component$,
    Slot,
    useSignal,
} from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import {
    Copy,
    Envelop,
    Modal,
    Telegram,
    WhatsApp,
} from "Base"

const Sharing = component$(({
    class: internalClass,
    modalTitle,
    title
}) => {

    const modalIsOpen = useSignal()
    const { url } = useLocation()

    return <>

        <div
            class={internalClass}
            onClick$={() => modalIsOpen.value = true}
        >
            <Slot />
        </div >

        <Modal
            isOpen={modalIsOpen}
        >
            <div class="sm:min-w-[25vw] min-w-[70vw]">
                <div class="w-full border-b border-custom-color1 pb-3 text-center">
                    <strong>{modalTitle}</strong>
                </div>
                <div class="flex items-center justify-center items-center gap-7 w-max mx-auto pt-3">
                    <a
                        aria-label="Telegram"
                        class="group flex flex-col items-center justify-center gap-y-3"
                        href={`https://telegram.me/share/url?url=${url?.href}`}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Telegram class="w-8 aspect-square" />
                        <p class="text-xs font-semibold">Telegram</p>
                    </a>
                    <a
                        aria-label="WhatsApp"
                        class="group flex flex-col items-center justify-center gap-y-3"
                        href={`whatsapp://send/?text=${title}:${url?.href}`}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <WhatsApp class="w-8 aspect-square" />
                        <p class="text-xs font-semibold">WhatsApp</p>
                    </a>
                    <a
                        aria-label="Email"
                        class="group flex flex-col items-center justify-center gap-y-3"
                        href={`mailto:?subject=${title}&body=${url?.href}`}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Envelop class="w-8 aspect-square" />
                        <p class="text-xs font-semibold">Email</p>
                    </a>
                    <div
                        class="group flex flex-col items-center justify-center gap-y-3 cursor-pointer"
                        onClick$={() => {
                            navigator.clipboard.writeText(url?.href)
                            alert(`Copied in clipboard`)
                        }}
                    >
                        <Copy class="w-8 aspect-square" />
                        <p class="text-xs font-semibold">Copy</p>
                    </div>
                </div>
            </div>
        </Modal>

    </>
})

export default Sharing
