import { merge } from "Base"

const Paragraph = ({
    class: internalClass,
    text,
}) => {

    return <p class={merge("text-center text-sm text-custom-color2", internalClass)}>
        {text}
    </p>
}

export default Paragraph
