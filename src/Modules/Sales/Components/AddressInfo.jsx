const AddressInfo = ({
    statics,
    packageItem,
}) => {

    return <>
        <section class="my-8">
            <div class="mb-4">
                <p class="text-lg font-bold">
                    {statics?.billingAddressTitle}
                </p>
                <p class="text-custom-color22 px-3 pt-1.5">
                    <strong class="pe-1">
                        {statics?.addressTitle}
                    </strong>
                    {packageItem?.contactsAddressFull}
                </p>
                <p class="text-custom-color22 px-3 pt-1.5">
                    <strong class="pe-1">
                        {statics?.postalCodeTitle}
                    </strong>
                    {packageItem?.contactsAddressPostalCode}
                </p>
                <p class="text-custom-color22 px-3 pt-1.5">
                    <strong class="pe-1">
                        {statics?.deliveryTitle}
                    </strong>
                    {packageItem?.contactsPersonDisplayName}
                </p>
            </div>
        </section>
    </>
}

export default AddressInfo
