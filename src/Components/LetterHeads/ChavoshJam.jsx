import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { Image } from "Base"

const ChavoshJam = component$(({
    data,
    invoice,
}) => {

    return <section
        id={`order-${invoice.order.id}`}
        class="max-w-6xl p-5 my-10 mx-auto bg-gray-100/50"
    >
        < div class="border-b-8 border-double border-custom-color1 p-3" >
            <div class="flex flex-row justify-between items-center">

                <div class="w-1/2 flex flex-col gap-3 justify-center items-center [&>div]:whitespace-nowrap [&>div]:flex [&>div]:flex-col">
                    <div>
                        <span>
                            {data?.title}:
                        </span>
                    </div>
                    <div>
                        <span>
                            {data?.subtitle}
                        </span>
                    </div>
                </div>
                <div class="flex flex-col gap-2 w-52 ">
                    <Image
                        containerClass="max-w-full w-1/1 aspect-square flex place-items-center p-3"
                        imageClass="w-full object-contain my-auto h-fit"
                        src={data?.logo}
                    />
                </div>
            </div>
        </div>
        <Slot />
        <div class="flex flex-col justify-center items-center lg:flex-row sm:justify-start sm:items-start text-center text-lg font-bold p-4 gap-5 mt-5 text-sm lg:text-xs xl:text-md">
            <span>{data.address}</span>
            <div class="flex flex-col justify-center items-center text-center gap-5 sm:flex-row sm:justify-center sm:items-center">
                <span>{data.postalCodeTitle}: {data.postalCode}</span>
                <span>{data.phoneNumberTitle}: {data.phoneNumber}</span>
                <span>{data.faxTitle}: {data.fax}</span>
            </div>
            <span>{data.email}</span>
        </div>
    </section >
})

export default ChavoshJam
