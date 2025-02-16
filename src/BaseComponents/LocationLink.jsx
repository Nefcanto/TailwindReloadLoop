import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { merge } from "Base"

const LocationLink = component$(({
    class: internalClass,
    latitude,
    longitude,
}) => {
    return <>
        <a
            class={internalClass}
            href={`https://maps.google.com/maps?daddr=${latitude},${longitude}&amp;ll=`}
            target="_blank"
        >
            <Slot />
        </a>
    </>
})

export default LocationLink
