import {
    component$,
    Slot
} from "@builder.io/qwik"
import { Image } from "Base"
import {
    Email,
    Phone,
} from "Svg"

const AkbarGanji = component$(({
    data,
    invoice,
}) => {

    return <section
        id={`order-${invoice.order.id}`}
        class="max-w-6xl p-5 my-10 mx-auto bg-gray-100/50"
    >
        <div class="border-b-8 border-double border-custom-color1 p-3" >
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-col justify-center items-center gap-2 w-52 ">
                    <Image
                        containerClass="max-w-full w-1/1 aspect-square flex place-items-center p-3"
                        // imageClass="w-full object-contain my-auto h-fit"
                        src={data?.logo}
                    />
                    <span class="font-black text-lg">{data.title}</span>
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
        <div class="grid grid-cols-1 md:grid-cols-2 text-lg font-bold rounded p-4 gap-5 mt-5 ">
            <span>{data.address}</span>
            <div class="flex flex-row justify-center items-center gap-2">
                <Phone class="w-6 h-6 fill-blue-300" />
                <span>{data.phoneNumber}</span>
            </div>
            <div class="flex flex-row justify-start items-center gap-2">
                <Email class="w-6 h-6 fill-blue-300" />
                <span>{data.email}</span>
            </div>
        </div>
    </section >
})

export default AkbarGanji
