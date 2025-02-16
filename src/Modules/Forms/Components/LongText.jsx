import { component$ } from "@builder.io/qwik"
import { merge } from "Base"
import Field from "./Field"

const LongText = component$(({
    ariaLabel,
    class: internalClass,
    modelBind,
    placeholder,
    property,
    ...rest
}) => {

    const { label } = rest

    return <Field {...rest}>
        <textarea
            rows="6"
            class={internalClass ? internalClass : "w-full mt-2 rounded-md px-4 py-2 focus:outline-hidden placeholder-gray-500"}
            aria-label={ariaLabel ?? label ?? placeholder}
            placeholder={placeholder}
            value={modelBind.value[property]}
            onInput$={(e) => modelBind.value[property] = e.target.value}
        >
        </textarea>
    </Field>
})

export default LongText
