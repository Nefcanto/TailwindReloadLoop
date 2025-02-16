import { merge } from "Base"

const Progress = ({
    class: internalClass,
    small,
}) => {

    return <span class={merge("inline-flex justify-center items-center", internalClass || "")} >
        <span class={merge(`w-6 h-6 border-t-4 border-custom-color1 rounded-full animate-spin`, small ? " w-4 aspect-square " : "")}></span>
    </span>
}

export default Progress
