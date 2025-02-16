import { component$ } from "@builder.io/qwik"
import {
    JuridicalPersonInputs,
    NaturalPersonInputs,
    useProfile
} from "Contacts"

const EditProfile = component$(({
    person,
    profileStatics,
}) => {

    const {
        isOpen,
        progress,
        model,
        updateProfile
    } = useProfile()

    return <>
        <div className="py-2">
            <div
                className="w-fit my-2 text-green-900 py-1 px-4 text-sm hover:bg-green-800 hover:text-white font-bold rounded-md duration-300 cursor-pointer"
                onClick$={() => { isOpen.value = true }}
            >
                {profileStatics?.edit}
            </div>
            {
                isOpen.value && <div>

                    <div
                        class="bg-black/60 fixed h-screen w-full top-0 start-0 z-40"
                        onClick$={() => isOpen.value = false}
                    />
                    <div class="fixed inset-0 h-fit m-auto w-[90%] px-4 py-6 max-w-xl grid grid-cols-1 items-center justify-start gap-4 z-50 bg-white rounded-lg">
                        <div class="flex flex-col items-center justify-start gap-y-4 md:items-start">
                            {
                                person.isJuridical ?
                                    <JuridicalPersonInputs
                                        model={model}
                                        profileStatics={profileStatics}
                                    /> :
                                    <NaturalPersonInputs
                                        model={model}
                                        profileStatics={profileStatics}
                                    />
                            }
                            <label>
                                {profileStatics?.nationalIdentificationNumber}
                            </label>
                            <input
                                class="bg-gray-200 rounded-lg p-2 w-full"
                                type="text"
                                onInput$={(e) => model.value.nationalIdentificationNumber = e.target.value}
                            >
                            </input>
                        </div>
                        <div class="flex gap-2 flex-row w-full items-center justify-center">
                            <button
                                class="w-full flex-1 bg-custom-color1 p-3 rounded-md text-white font-bold text-sm disabled:bg-slate-100 disabled:text-slate-800"
                                type="button"
                                disabled={progress.value}
                                onClick$={updateProfile}
                            >
                                {progress.value ? "..." : profileStatics?.edit}
                            </button>
                            <button
                                class="w-full flex-1 bg-gray-200 p-3 rounded-md text-black font-bold text-sm"
                                type="button"
                                onClick$={() => isOpen.value = false}
                            >
                                {profileStatics?.cancel}
                            </button>
                        </div>
                    </div>
                </div>

            }
        </div>
    </>
})

export default EditProfile
