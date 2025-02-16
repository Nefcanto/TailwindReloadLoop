import { useAddressesUrl } from "Contacts"
import { Plus } from "Sales"

const Addresses = ({
    addresses,
    addressStatics,
    localePathPrefix,
    packageModel,
}) => {

    return <div>
        <div class="flex items-center gap-1">
            <div class="w-4 aspect-square bg-custom-color9"></div>
            <p class="text-base font-bolder">{addressStatics.addressTitle}</p>
        </div>
        <div class="border p-4 mt-6">
            <p class="text-base font-bolder">{addressStatics.addressSubtitle}</p>
            <p class="text-sm font-bold flex items-center gap-2">
                <span class="text-gray-400">{addressStatics.client}</span>
                <span class="text-blue-500">x</span>
            </p>

            <div class="mt-10">
                {
                    addresses?.map(address => <div class="flex gap-2 md:items-center flex-col md:flex-row mb-4">
                        <div class="border p-2 grow">
                            <label class="text-sm font-medium text-gray-900 block flex items-center gap-2">
                                <input
                                    key={address.id}
                                    type="radio"
                                    name="address"
                                    class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                    onclick$={(e) => {
                                        packageModel.address = address
                                    }}
                                />
                                <span>
                                    {address.full}
                                </span>
                            </label>
                        </div>
                    </div>
                    )}
                <a
                    class="my-10 flex items-center gap-1"
                    href={useAddressesUrl(localePathPrefix)}
                >
                    <Plus class="w-6 aspect-square fill-blue-500" />
                    <span class="text-sm text-blue-500">{addressStatics.addNewAddressTitle}</span>
                </a>
            </div>

        </div>
    </div>
}

export default Addresses
