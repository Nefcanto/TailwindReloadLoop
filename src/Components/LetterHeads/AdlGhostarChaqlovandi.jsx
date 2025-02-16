import {
    component$,
    Slot
} from "@builder.io/qwik"
import { Image } from "Base"

const AdlGhostarChaqlovandi = component$(({
    data,
    invoice,
}) => {

    return <section
        id={`order-${invoice.order.id}`}
        class="max-w-6xl p-5 my-10 mx-auto bg-gray-100/50"
    >
        <div class="flex justify-between items-center px-20">
            <div class="flex flex-col justify-center items-center gap-2">
                <Image
                    containerClass="max-w-full w-1/1 aspect-[4/3]"
                    src={data.image}
                />
                <span>{data.title}</span>
                <span>{data.subtitle}</span>

            </div>
            <div class="flex flex-col justify-center items-center">
                <span>{data.date}</span>
                <span>{data.number}</span>
                <span>{data.attachment}</span>

            </div>
        </div>
        <Slot />
        <div class="flex flex-col justify-center items-center mt-10">
            <span>{data.email}</span>
            <span>{data.address}</span>
            <span>{data.number}</span>
        </div>
    </section >
})

export default AdlGhostarChaqlovandi



