import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { Image } from "Base"

const TarabarSadrahJam = component$(({
    data,
    invoice,
}) => {

    return <section
        id={`order-${invoice.order.id}`}
        class="max-w-6xl p-5 my-10 mx-auto bg-gray-100/50"
    >
        < div class="border-b-8 border-double border-custom-color1 p-3" >
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-col justify-center items-center gap-2 w-52 ">
                    <Image
                        containerClass="max-w-full w-1/1 aspect-square flex place-items-center p-3"
                        // imageClass="w-full object-contain my-auto h-fit"
                        src={data?.logo}
                    />
                    <span class="font-black text-lg">{data.title}</span>
                    <span class="bg-sky-900 text-white font-bold rounded p-2">{data.subtitle}</span>
                </div>
                <div class="w-1/2 flex flex-col gap-3 justify-center items-center [&>div]:whitespace-nowrap [&>div]:flex [&>div]:flex-col">
                    <div>
                        <span>
                            {data?.date}:
                        </span>
                    </div>
                    <div>
                        <span>
                            {data?.attachment}:
                        </span>
                    </div>
                    <div>
                        <span>
                            {data?.number}:
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <Slot />
        <div class="flex flex-col justify-center items-center text-center text-lg font-bold text-white bg-sky-900 rounded p-4 gap-5 mt-5 ">
            <span>{data.address}</span>
            <div class="flex flex-col justify-center items-center text-center gap-5 md:flex-row md:justify-center md:items-center">
                <span>{data.postalCodeTitle}: {data.postalCode}</span>
                <span>{data.phoneNumberTitle}: {data.phoneNumber}</span>
                <span>{data.faxTitle}: {data.fax}</span>
            </div>
            <span>{data.email}</span>
        </div>
    </section >
})

export default TarabarSadrahJam
