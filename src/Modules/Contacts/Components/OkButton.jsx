import { component$ } from "@builder.io/qwik"

const OkButton = component$(({
    onClick$: _onClick$,
    title,
}) => {

    return <button
        class="w-fit my-2 text-green-900 py-1 px-4 text-sm hover:bg-green-800 hover:text-white font-bold rounded-md duration-300"
        onClick$={_onClick$}
    >
        <span>
            {title}
        </span>

    </button>

})

export default OkButton
