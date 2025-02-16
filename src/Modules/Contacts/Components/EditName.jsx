import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import {
    OkButton,
    CancelButton,
} from "Contacts"

const EditName = component$(({
    cancel,
    item,
    profileStatics,
}) => {

    const userName = useSignal(item.value)


    return <div class="w-full flex gap-1 px-4 items-center">
        <div class="rounded-md overflow-hidden bg-white w-2/3 border">
            <input
                type="text"
                value={userName.value}
                class="outline-hidden w-full h-full bg-transparent py-2 px-4"
                placeholder={item.title}
                onInput$={(e) => userName.value = e.target.value}
            />
        </div>
        <OkButton
            title={profileStatics?.edit}

        />
        <CancelButton
            title={profileStatics?.cancel}
            onClick$={cancel}
        />
    </div>
})

export default EditName
