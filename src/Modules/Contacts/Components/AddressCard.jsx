import { component$ } from "@builder.io/qwik"
import {
    merge,
    post,
} from "Base"
import { getAddresses } from "Contacts"

const AddressCard = component$(({
    address,
    addresses,
    addressStatics,
    click,
    isActive,
    session,
}) => {

    return <div
        onClick$={click}
        class={merge(
            `relative border border-2 border-dotted hover:border-green-400 rounded-md p-3 w-full flex flex-col items-start justify-center gap-y-2 [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:gap-x-2 [&>div>strong]:whitespace-nowrap group cursor-pointer bg-[linear-gradient(0deg,#efefef_0,#efefef_49%,#f7f7f7_52%,#f7f7f7)]`,
            ` ${isActive && "bg-green-100"}`)}
    >
        <div>
            <strong>{addressStatics?.cities}: </strong>
            <span class="line-clamp-1">
                {address.geoCityName}
            </span>
        </div>
        <div>
            <strong>{addressStatics?.rest}: </strong>
            <span class="line-clamp-1">
                {address.rest}
            </span>
        </div>
        <div>
            <strong>{addressStatics?.remarks}: </strong>
            <span class="line-clamp-1">
                {address.remarks}
            </span>
        </div>
        <div>
            <strong>{addressStatics?.postalCode}: </strong>
            <span class="line-clamp-1">
                {address.postalCode}
            </span>
        </div>
        <button
            onClick$={async (e) => {

                e.stopPropagation()
                await post(`/address/deleteAddress?id=${address.id}`, {
                    "userGuid": `${session?.user?.guid || session?.value?.user?.guid}`
                })
                addresses.value = await getAddresses({ session })
            }}
            class="block md:hidden group-hover:block group w-5 bg-red-500 rounded-full absolute end-2.5 top-2.5 flex items-center justify-center text-lg px-6"

        >
            <span class="text-sm flex items-center justify-center text-white hover:text-black">x</span>
            {/* <Remove class="w-full h-full fill-white" /> */}
        </button>
        {isActive && <div class="group-hover:hidden rounded-full absolute end-2.5 top-2.5 p-0.5">
            {/* <CheckedIcon class="fill-green-800 w-6" /> */}
            *
        </div>}
    </div>
})

export default AddressCard
