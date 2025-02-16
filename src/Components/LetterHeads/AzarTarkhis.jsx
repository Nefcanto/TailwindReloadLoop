import {
    component$,
    Slot,
} from "@builder.io/qwik"

const AzarTarkhis = component$(({
    data,
    invoice,
}) => {

    return <section
        id={`order-${invoice.order.id}`}
        class="max-w-6xl p-5 my-10 mx-auto bg-gray-100/50"
    >
        <h1>{data.title}</h1>
        <Slot />
    </section >
})

export default AzarTarkhis
