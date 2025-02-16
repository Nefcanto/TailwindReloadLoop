import { merge } from "Base"

const Check = ({ class: internalClass }) => {
    return <svg
        viewBox="0 -960 960 960"
        class={merge("w-5 h-5", internalClass)}
    >
        <path d="M382-276 192-466l20-20 170 170 366-366 20 20-386 386Z" />
    </svg>
}

export default Check
