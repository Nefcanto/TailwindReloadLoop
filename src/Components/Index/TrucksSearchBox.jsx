import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import { useFlowsUrl } from "Flows"
import {
    Close,
    Left,
    PriorityHigh,
    Search,
} from "Svg"
import {
    Cta,
    Title,
} from "Shared"

const TrucksSearchBox = component$(({
    isRtl,
    localePathPrefix,
    placeholder,
    searchStatics,
}) => {

    const search = useSignal("")

    const isSearchOpen = useSignal(true)

    return <>
        <section class={`px-3 mt-[17.2rem] sm:px-16 sm:mt-20 md:mt-7 relative ${!isSearchOpen.value ? "overflow-hidden" : ""}`}>
            <div
                class={`${!isSearchOpen.value ? "opacity-100 visible" : "opacity-0 invisible"} transition-all duration-500 absolute start-0 top-0 bottom-0 my-auto flex place-items-center bg-gray-200 h-[50%] rounded-e-xl`}
                onClick$={() => isSearchOpen.value = true}
            >
                <Left class="w-8 aspect-square cursor-pointer" />
            </div>
            <div class={`max-w-full bg-white rounded-xl pb-8 md:w-[600px] mx-auto shadow-xl relative transition-all duration-500 ${!isSearchOpen.value && " opacity-0 invisible translate-x-[2000px]"}`}>
                <Close
                    class="w-8 aspect-square absolute top-5 end-5 cursor-pointer"
                    onClick$={() => isSearchOpen.value = false}
                />
                <Title
                    class="text-xl w-full pt-5"
                    text={searchStatics.headTitle}
                />
                <div
                    class="relative w-full sm:w-4/5 mx-auto md:w-[500px] h-12 md:h-14 px-2"
                    onKeyDown$={e => {
                        if (e.key == "Enter") {
                            if (search.value?.length >= 6) {
                                trigger("searchWidget", search.value)
                                window.location.href = useFlowsUrl({
                                    search: search.value,
                                    entityType: 'truck',
                                    initialSearch: search.value,
                                    localePathPrefix,
                                    module: 'trucks',
                                })
                            }
                        }
                    }}
                >
                    <Search class={`absolute start-4 w-7 h-7 top-1/2 -translate-y-1/2 ${isRtl ? "-scale-x-100" : ""}`} />
                    <input
                        class="flex-1 w-full h-full flex items-center gap-2 mt-6 rounded-lg border-2 border-transparent ps-10 pe-6 py-2 bg-gray-200 focus:bg-white focus:border-custom-color1 transition-all duration-500 outline-none"
                        onInput$={e => {
                            search.value = e.target.value
                            on("searchWidget", () => {
                                e.target.value = ""
                            })
                        }}
                        placeholder={placeholder}
                    />
                    <span class="p-2 my-2 text-xs bg-orange-100 rounded flex items-center justify-start"><PriorityHigh class="fill-orange-600 w-5 aspect-square" />{searchStatics.inputGuide}</span>
                </div>
                <Cta
                    class="mt-16 w-44"
                    link={useFlowsUrl({
                        search: search.value,
                        entityType: 'truck',
                        initialSearch: search.value,
                        localePathPrefix,
                        module: 'trucks',
                    })}
                    text={searchStatics.ctaText}
                />
            </div>
        </section>
    </>
})

export default TrucksSearchBox
