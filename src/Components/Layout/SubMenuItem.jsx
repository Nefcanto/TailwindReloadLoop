import {
    component$,
    useSignal,
} from "@builder.io/qwik"

const SubMenuItem = component$(({ item }) => {

    return <>
        <div class="flex flex-row gap-5 p-3">
            <a
                href={item.url}
                class="transition-all duration-200 hover:scale-110 hover:translate-x-[-1rem] cursor-pointer px-5"
            >
                <span class="text-xl font-bold text-gray-500 bg-right-bottom bg-gradient-to-r from-black to-black bg-[length:0%_0px] bg-no-repeat hover:bg-[length:100%_2px] hover:text-custom-color1 hover:bg-right-bottom transition-all duration-500">{item.title}</span>
            </a>
        </div>
    </>
})

export default SubMenuItem

