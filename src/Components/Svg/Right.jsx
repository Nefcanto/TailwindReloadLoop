import { merge } from "Base"

const Right = ({ class: internalClass }) => {
    return <svg
        viewBox="0 -960 960 960"
        class={merge("w-4 h-4", internalClass)}
    >
        <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" />
    </svg>
}

export default Right
