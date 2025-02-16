import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import { merge } from "Base"
import { RichText } from "Shared"
import { Left } from "Svg"

const Content = component$(({
    class: internalClass,
    closeContentTitle,
    content,
    openContentTitle,
}) => {

    const isRichTextOpen = useSignal(false)

    return content && JSON.parse(content).length > 1 && <>
        <section class={`${internalClass ?? "relative transition-all overflow-hidden rounded-lg bg-white mt-10 px-5 pb-5 shadow-sm"}`}>
            <div class={merge(isRichTextOpen.value ? "max-h-fit pb-18" : "max-h-96 pb-5", "w-full overflow-hidden relative duration-1000 transition-all")}>
                <RichText content={content} />
            </div>
            <div class={merge(isRichTextOpen.value ? "hidden" : "block", "w-full absolute start-0 bottom-0 h-full bg-gradient-to-t from-custom-color24")} />
            <div class="w-full flex justify-center absolute bottom-0 start-0 bg-transparent mb-4 group">
                <div
                    class={merge(isRichTextOpen.value ? "text-custom-color2" : "text-black", "px-2.5 text-sm cursor-pointer group-hover:text-custom-color2 transition-all")}
                    onClick$={() => isRichTextOpen.value = !isRichTextOpen.value}
                >
                    {
                        isRichTextOpen.value
                            ?
                            <div class="flex flex-col items-center text-base gap-1">
                                <p>
                                    {closeContentTitle}
                                </p>
                                <div class="h-14 w-9 rounded-full border border-custom-color3 flex relative justify-center py-2 before:w-2 before:h-2 before:bg-custom-color3 before:rounded-full before:mx-auto before:absolute before:-bottom-2 overflow-hidden group-hover:before:bottom-4 before:duration-300">
                                    <Left class="w-8 h-8 text-custom-color2 group-hover-text-custom-color3 transition-all rotate-90 self-start translate-y-0.5 group-hover:-translate-y-1 duration-300" />
                                </div>
                            </div>
                            :
                            <div class="flex flex-col items-center text-base gap-1">
                                <p>
                                    {openContentTitle}
                                </p>
                                <div class="h-14 w-9 rounded-full border border-custom-color3 flex relative justify-center py-2 before:w-2 before:h-2 before:bg-custom-color3 before:rounded-full before:mx-auto before:absolute before:-top-2 overflow-hidden group-hover:before:top-4 before:duration-300">
                                    <Left class="w-8 h-8 text-custom-color2 group-hover:text-custom-color3 transition-all -rotate-90 self-start translate-y-0.5 group-hover:translate-y-1/4 duration-300" />
                                </div>
                            </div>
                    }
                </div>
            </div>
        </section>
    </>
})

export default Content
