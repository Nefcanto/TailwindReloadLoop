import { component$ } from "@builder.io/qwik"
import { merge } from "Base"
import Field from "./Field"

const Email = component$(({
    ariaLabel,
    class: internalClass,
    modelBind,
    placeholder,
    property,
    ...rest
}) => {

    const { label } = rest

    return <Field {...rest}>
        <input
            type="email"
            class={internalClass ? internalClass : "w-full mt-2 border border-gray-300 rounded-md px-5 py-3 focus:outline-hidden placeholder-gray-500"}
            aria-label={ariaLabel ?? label ?? placeholder}
            placeholder={placeholder}
            value={modelBind.value[property]}
            onInput$={(e) => modelBind.value[property] = e.target.value}
        />
    </Field>
})

export default Email
