import { component$ } from "@builder.io/qwik"
import { merge } from "Base"
import Field from "./Field"

const File = component$(({
    ariaLabel,
    class: internalClass,
    label,
    modelBind,
    placeholder,
    property,
    ...rest
}) => {
    return <Field {...rest}>
        <label>
            {label}
        </label>
        <input
            class={merge("w-full text-blue-600 rounded-sm", internalClass)}
            type="file"
            aria-label={ariaLabel ?? label ?? placeholder}
            placeholder={placeholder}
            multiple
            onInput$={(e) => {
                console.log(property)
                window[property] = e.target.files
            }}
        />
    </Field>
})

export default File
