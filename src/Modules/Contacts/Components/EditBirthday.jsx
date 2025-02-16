import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import {
    OkButton,
    CancelButton,
} from "Contacts"

const EditBirthday = component$(({
    cancel,
    profileStatics,
    item,
}) => {

    const birthday = useSignal(item.value)

    return <div class="w-full flex gap-1 px-4 items-center">
        <div class="rounded-md overflow-hidden bg-white w-2/3 border">
            <input
                type="text"
                value={birthday.value}
                class="outline-hidden w-full h-full bg-transparent py-2 px-4"
                placeholder={item.name}
                onInput$={(e) => birthday.value = e.target.value}
            />
        </div>
        <OkButton
            title={profileStatics?.edit}
            onClick$={() => { }}
        />
        <CancelButton
            title={profileStatics?.cancel}
            onClick$={cancel}
        />
    </div>
})

export default EditBirthday
