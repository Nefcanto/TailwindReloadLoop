import {
    component$,
    Slot,
} from "@builder.io/qwik"

const SwiperSlide = component$(({
    class: internalClass,
    key,
    ...rest
}) => {

    return <div
        key={key}
        data-hash={key}
        class={`swiper-slide ${internalClass}`}
        {...rest}
    >
        <Slot />
    </div>
})

export default SwiperSlide
