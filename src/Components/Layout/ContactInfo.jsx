const ContactInfo = ({
    title,
    mainAddressTitle,
    mainAddress,
    mainPhoneTitle,
    mainPhone,
    mainEmailTitle,
    mainEmail,
}) => {

    return <>
        <div class="sm:col-span-1 px-4">
            <p class={"text-lg text-white font-bold text-start after:content-[\"\"] after:block after:mx-start after:mt-3 after:w-16 after:h-[5px] after:bg-custom-color1 after:rounded-lg"}>
                {title}
            </p>
            <div class="flex flex-col gap-5 mt-5">

                <div class="flex flex-col gap-2">
                    <p class="font-bold">
                        {mainAddressTitle}
                    </p>
                    <p>
                        {mainAddress}
                    </p>
                </div>

                <div class="flex flex-col gap-2">
                    <p class="font-bold">
                        {mainPhoneTitle}
                    </p>
                    <a href={`tel:${mainPhone}`}>
                        {mainPhone}
                    </a>
                </div>

                <div class="flex flex-col gap-2">
                    <p class="font-bold">
                        {mainEmailTitle}
                    </p>
                    <a href={`mailto:${mainEmail}`}>
                        {mainEmail}
                    </a>
                </div>

            </div>
        </div>
    </>
}

export default ContactInfo
