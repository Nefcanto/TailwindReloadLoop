import { component$ } from "@builder.io/qwik"
import { Cta } from "Shared"
import {
    Loading,
    PriorityHigh,
    Search,
} from "Svg"

const Form = component$(props => {
    const {
        buttonBehavior,
        inputBehavior,
        isRtl,
        notFound,
        placeholder,
        searchStatics,
        systemIsSearching,
    } = props
    return <>
        <div class="relative w-full sm:w-4/5 mx-auto md:w-[500px] h-12 md:h-14" >
            <Search class={`absolute start-2 w-7 h-7 top-1/2 -translate-y-1/2 ${isRtl ? "-scale-x-100" : ""}`} />
            <input
                class="flex-1 w-full h-full flex items-center gap-2 mt-4 rounded-lg border-2 border-transparent ps-10 pe-6 py-2 bg-gray-100 focus:bg-white focus:border-custom-color1 transition-all duration-500 outline-none"
                {...inputBehavior}
                placeholder={placeholder}
            />
            <span class="p-2 my-2 text-xs bg-orange-100 rounded flex items-center justify-start"><PriorityHigh class="fill-orange-600 w-5 aspect-square" />{searchStatics?.inputGuide}</span>
        </div >
        <Cta
            class="mt-20 w-44"
            hasClickHandler
            {...buttonBehavior}
            text={searchStatics?.ctaText}
        />
        {
            systemIsSearching &&
            <div class="mt-16">
                <Loading class="mx-auto w-6 aspect-square animate-spin" />
            </div>
        }
        {
            notFound &&
            <div class="notFound w-fit text-sm mx-auto my-4">
                {searchStatics?.notFound}
            </div>
        }
    </>
})

export default Form
