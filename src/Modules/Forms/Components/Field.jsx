import {
    component$,
    Slot,
} from "@builder.io/qwik"

const Field = component$(({
    id,
    label,
    type
}) => {
    return <div class="mb-2">
        {
            type != "Boolean" &&
            label &&
            <label
                id={id}
                class="text-md text-slate-500"
            >
                {label}
            </label>
        }
        <Slot />
    </div>
})

export default Field
