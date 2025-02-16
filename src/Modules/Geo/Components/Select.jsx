import {
    $,
    component$,
    useSignal,
    useTask$,
    useVisibleTask$,
} from "@builder.io/qwik"
import {
    ExpandMore,
    merge,
} from "Base"

const Select = component$(({
    all,
    boxClass,
    childClass,
    class: internalClass,
    filter,
    filterProperty,
    filterText,
    items,
    label,
    name,
    onChange,
    selected,
    ...rest
}) => {

    const boxRef = useSignal()
    const selectRef = useSignal()

    const isOpen = useSignal(false)
    const selectedItem = useSignal(label)
    const filteredItems = useSignal(items?.value)

    useVisibleTask$(({ track }) => {
        track(() => items.value)
        selectedItem.value = label
        filteredItems.value = items.value
    })

    const clickSelectHandler = $((e) => {
        e.stopPropagation()
        isOpen.value = !isOpen.value
    })

    const selectItemHandler = $((e, el) => {
        selectedItem.value = el.name
        isOpen.value = false
        onChange(e, el)

    })

    const filterChangeHandler = $((e) => {
        if (!e.target.value) {
            filteredItems.value = items.value
        } else {
            const filterText = e.target.value
            filteredItems.value = items.value?.filter(el => el?.[filterProperty || "name"]?.toLowerCase()?.includes(filterText?.toLowerCase()))
        }

    })

    const handleClickOutside = $((event) => {
        if (
            boxRef.value &&
            !boxRef.value.contains(event.target) &&
            !selectRef.value.contains(event.target)
        ) {
            isOpen.value = false
        }
    })

    useVisibleTask$(
        () => {
            document.addEventListener("mousedown", handleClickOutside)
            return () => document.removeEventListener("mousedown", handleClickOutside)
        }
    )

    useTask$(({ track }) => {
        track(() => selected)
        let changedSelect = ""
        if (selected) {
            changedSelect = items.value?.find(el => el.slug === selected)
        }
        selectedItem.value = changedSelect?.name || label
    })

    return <>
        <div
            class={merge("relative selection:text-inherit selection:bg-inherit bg-white", internalClass)}
        >
            <div
                onClick$={clickSelectHandler}
                ref={selectRef}
                class={`flex items-center justify-between px-2 py-1 cursor-pointer`}>
                <p class="text-black line-clamp-1 text-custom-color1">{selectedItem.value}</p>
                <ExpandMore class={`w-5 h-5 text-black ${isOpen.value ? "rotate-180" : ""} transition-all duration-300`} />
            </div>
            <div
                ref={boxRef}
                class={merge("transition-all duration-300 absolute z-10 min-w-full lg:w-auto top-[45px] end-1/2 translate-x-[-50%] bg-white my-1 rounded-md shadow-xl", boxClass, (isOpen.value ? "visible opacity-100" : "invisible opacity-0"))}>
                <div class="max-h-[200px] overflow-y-auto">
                    {items?.value && items.value?.length > 0 ? <>
                        {/* filter */}
                        {filter ? <div class="w-[90%] mx-auto px-1 py-1 my-1 border border-slate-400 rounded-xs">
                            <input
                                class="w-full h-full block bg-transparent border-none outline-hidden"
                                onInput$={filterChangeHandler}
                                placeholder={filterText}
                            />
                        </div> : null}
                        {/*reset select text */}
                        {all ? <span
                            class={merge("block w-full py-1 cursor-pointer selection:text-inherit selection:bg-inherit px-2" + childClass)}
                            onClick$={(e) => selectItemHandler(e, { name: all, slug: "" })}>{all}</span> : null}
                        {/* items map */}
                        {
                            filteredItems.value?.map(el => <span
                                class={merge("block w-full py-1 cursor-pointer selection:text-inherit selection:bg-inherit px-2", childClass)}
                                key={el.id}
                                onClick$={(e) => selectItemHandler(e, el)}
                            >{el?.name}</span>)
                        }
                    </> : <span class="block text-slate-300 h-12 flex items-center justify-center px-2">no data !!</span>
                    }
                </div>
            </div>
        </div>
    </>
})

export default Select
