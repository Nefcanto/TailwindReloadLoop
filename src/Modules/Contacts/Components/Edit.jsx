import {
    $,
    component$,
} from "@builder.io/qwik"
import { Edit as EditIcon } from "Base"

const Edit = component$(({ click }) => {

    return <>
        <div
            onClick$={click}
            class="absolute w-full h-full to-0 start-0 z-20">
        </div>
        <EditIcon class="w-4 h-4 fill-green-500 absolute top-2 end-2 z-10" />
    </>
})

export default Edit
