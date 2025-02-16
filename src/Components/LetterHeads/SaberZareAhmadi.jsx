import {
    component$,
    Slot
} from "@builder.io/qwik"
import { Image } from "Base"

const SaberZareAhmadi = component$(({
    data,
    invoice,
}) => {

    return <section
        id={`order-${invoice.order.id}`}
        class="max-w-6xl p-5 my-10 mx-auto bg-gray-100/50"
    >
        <Image
            containerClass="w-52 aspect-[4/3] mx-auto"
            src={data.image}
        />

        <div class="flex flex-row justify-between items-center px-24 mt-2">
            <div class="flex flex-col gap-4">
                <span>{data.title}</span>
                <span>{data.subtitle}</span>
            </div>
            <div class="flex flex-col gap-4">
                <span>{data.date}</span>
                <span>{data.number}</span>
            </div>
        </div>
        <Slot />
        <div class="border-t border-black my-5"></div>
        <div class="px-10 mt-5">
            <span>{data.address}</span>
            <div class="flex flex-row justify-center items-center gap-8 mt-3">
                <span>{data.email}</span>
                <span>{data.phoneNumber}</span>
            </div>
        </div>
    </section >
})

export default SaberZareAhmadi
