import {
    component$,
    Slot
} from "@builder.io/qwik"

const TankerBarOmidArdebil = component$(({
    data,
    invoice,
}) => {

    return <section
        id={`order-${invoice.order.id}`}
        class="max-w-6xl p-5 my-10 mx-auto bg-gray-100/50"
    >
        {data.title}
        <Slot />
    </section >
})

export default TankerBarOmidArdebil






