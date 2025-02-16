import {
    component$,
    Slot
} from "@builder.io/qwik"
import { Image } from "Base"

const TejaratTandisYektaSabalan = component$(({
    data,
    invoice,
}) => {

    return <section
        id={`order-${invoice.order.id}`}
        class="max-w-6xl p-5 my-10 mx-auto bg-gray-100/50"
    >
        < div class="border-b-8 border-double border-custom-color1 p-3" >
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-col justify-start items-start gap-2 w-52">
                    <span class="font-black text-lg">{data.title}</span>
                    <span class="font-bold ">{data.subtitle}</span>
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
        <div class="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 mt-5 text-sm sm:text-md">
            <span>{data.address}</span>
            <div class="flex flex-row justify-start items-start gap-4">
                <span>{data.managerNameTitle}</span>
                <span>{data.managerName}</span>
                <span>{data.phoneNumber}</span>
            </div>
        </div>
    </section >
})

export default TejaratTandisYektaSabalan

