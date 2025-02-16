import {
    component$,
    Slot,
} from "@builder.io/qwik"
import {
    Image,
    LocalizedDate
} from "Base"
import {
    Phone,
    PinDrop,
} from "Svg"
const Default = component$(({
    invoice,
    invoiceParts,
    locale,
    localesEnum,
}) => {

    return <>
        <section class="max-w-6xl p-5 my-10 mx-auto bg-gray-100/50">
            <div class="border-b-8 border-double border-custom-color1 p-3">
                <div class="flex flex-row justify-between items-center">
                    <div class="flex flex-col gap-2 w-52 ">
                        <Image
                            containerClass="max-w-full w-1/1 aspect-square flex place-items-center p-3"
                            imageClass="w-full object-contain my-auto h-fit"
                            src={invoiceParts?.logo}
                        />
                    </div>
                    <div class="w-1/2 flex flex-col gap-3 justify-center items-center [&>div]:whitespace-nowrap [&>div]:flex [&>div]:flex-col">
                        <div>
                            <span>
                                {invoiceParts?.date}:
                            </span>
                            <span>
                                <LocalizedDate
                                    localeKey={locale.key}
                                    localesEnum={localesEnum}
                                    utcDate={invoice?.order?.utcDate}
                                />
                            </span>
                        </div>
                        <div>
                            <span>
                                {invoiceParts?.attachment}:
                            </span>
                            <span>
                                ---
                            </span>
                        </div>
                        <div>
                            <span>
                                {invoiceParts?.orderNumber}:
                            </span>
                            <span>
                                {invoice?.order?.number}
                            </span>
                        </div>
                    </div>
                </div>
                <span class=" flex justify-center items-center font-black text-center text-2xl mt-10 sm:mt-5">{invoiceParts?.title}</span>
            </div>
            <Slot />
            <div class="border-t-8 border-double border-custom-color1 p-3 flex">
                {/* <div class="md:w-1/2 hidden md:block">
                    <span class="min-h-[40px] h-full w-[90%] bg-custom-color1 block" />
                </div> */}
                <div class="w-full md:w-1/2 flex flex-col gap-4">
                    <div class="flex flex-col place-items-center gap-3 md:flex-row">
                        <PinDrop class="w-7 aspect-square fill-black" />
                        <span class="md:text-sm w-fit">{invoiceParts?.address}</span>
                    </div>
                    <div class="flex flex-col place-items-center gap-3 md:flex-row">
                        <Phone class="w-7 aspect-square fill-black" />
                        <span class="md:text-sm w-fit">{invoiceParts?.phoneNumberTitle}:</span>
                        <span class="md:text-sm w-fit">{invoiceParts?.phoneNumber}</span>

                    </div>
                </div>
            </div>
        </section>
    </>
})

export default Default
