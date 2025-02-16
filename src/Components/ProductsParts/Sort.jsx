import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import {
    Left,
    Tune,
} from "Svg"

const Sort = component$(({
    isActive,
    items,
    mobileTitle,
    title,
}) => {

    const location = useLocation()
    const sort = useSignal()
    const url = new URL(location.url.href)
    if (url.searchParams.has("sort")) {
        sort.value = url.searchParams.get("sort")
    }
    const sortChangeHandler = $(value => {
        const newSearchParams = url.searchParams
        newSearchParams.set("sort", value)
        window.location.href = url.toString()
    })
    const deleteSortHandler = $(() => {
        const newSearchParams = url.searchParams
        newSearchParams.delete("sort")
        window.location.href = url.toString()
    })

    return isActive && <>
        <div class="w-fit flex flex-row justify-start items-center gap-1.5 lg:gap-2.5">
            <div class="flex items-center gap-0.5 sm:gap-1.5 md:text-md text-custom-color2">
                <Tune class="w-4 sm:w-5 md:w-6 fill-custom-color2" />
                <p class="hidden lg:flex">
                    {title}
                </p>
                <p class="lg:hidden">
                    {mobileTitle}
                </p>
            </div>
            <div class="hidden lg:flex items-center select-none">
                {
                    items?.map(item => <button
                        class={`py-0.5 px-1.5 cursor-pointer ${sort.value == item.title ? "font-semibold text-custom-color2 bg-custom-color1 rounded" : "font-normal text-custom-color22 hover:text-custom-color2 transition-all"}`}
                        key={item.id}
                        onClick$={() => sort.value == item.title ? deleteSortHandler() : sortChangeHandler(item.title)}
                    >
                        {item.title}
                    </button>)
                }
            </div>
            <div class="lg:hidden flex items-center justify-between w-fit relative z-10">
                <select
                    class="border-custom-color1 focus:border-custom-color1 active:border-custom-color1 z-10 h-full w-full appearance-none rounded border bg-transparent py-0.5 pe-3.5 ps-2 text-start text-xs xs:text-sm outline-none sm:py-1 sm:pe-5"
                    name="sort"
                    onInput$={(e) => {
                        sort.value = e.target.value
                        sortChangeHandler(sort.value)
                    }}
                >
                    {
                        items?.map(item => <option
                            key={item.id}
                            selected={sort.value == item.title}
                            value={item.value}
                        >
                            {item.title}
                        </option>)
                    }
                </select>
                <Left class="w-4 sm:w-6 border-e border-custom-color24 absolute z-0 sm:ps-0.5 end-0 top-[50%] -translate-y-1/2 -rotate-90" />
            </div>
        </div>
    </>
})

export default Sort
