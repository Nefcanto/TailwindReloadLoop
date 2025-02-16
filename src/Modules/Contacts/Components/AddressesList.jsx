import {
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import {
    AddressCard,
    AddressForm,
    getAddresses,
} from "Contacts"

const AddressesList = component$(({
    addresses,
    addressStatics,
    request,
    session,
    ...rest
}) => {
    const addressesSignal = useSignal(addresses)
    const isOpen = useSignal(false)

    useVisibleTask$(async ({ track }) => {
        track(() => addressesSignal.value)
        const data = await getAddresses({ session })

        if (data?.length != addressesSignal.value?.length) {
            addressesSignal.value = await getAddresses({ session })
        }
    })

    return <div class="w-full">
        <div class="flex flex-col gap-y-4">
            {
                addressesSignal?.value?.map(address => <AddressCard
                    key={address.id}
                    addresses={addressesSignal}
                    isActive={false}
                    // onClick={() => { }}
                    address={address}
                    addressStatics={addressStatics}
                    session={session}
                />
                )
            }
        </div>
        <AddressForm
            addresses={addressesSignal}
            addressStatics={addressStatics}
            isOpen={isOpen}
            request={request}
            session={session}
        />
        <div
            onClick$={() => isOpen.value = true}
            class="w-full h-full border rounded-md border-2 border-dotted w-full h-full flex flex-col items-center justify-center gap-5 group p-4 cursor-pointer mt-6">
            <div class="w-14 h-14 rounded-full border border-2 border-gray-600 flex items-center justify-center group-hover:border-green-500 group-hover:text-green-500">
                +
            </div>
            <span class="group-hover:text-green-500">
                {addressStatics?.addAddressText}
            </span>
        </div>
    </div>
})

export default AddressesList
