import {
    component$,
    Slot,
} from "@builder.io/qwik"

const MetallicShine = component$(props => {

    return <div class="relative group">
        <span
            style={{ opacity: "0%" }}
            class="absolute top-0 z-0 h-full w-8 animate-shine bg-gradient-to-r from-white/0 via-white/60 to-white/0" />
        <Slot />
    </div>
})

export default MetallicShine
