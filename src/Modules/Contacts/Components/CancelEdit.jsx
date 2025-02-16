import {
    $,
    component$,
} from "@builder.io/qwik"

const CancelEdit = component$(({ click }) => {

    return <>
        <div
            onClick$={click}
            class="absolute w-4 h-4 to-0 end-0 z-20">
            <span class="font-bold text-red-400 text-lg">x</span>
        </div>
    </>
})

export default CancelEdit
