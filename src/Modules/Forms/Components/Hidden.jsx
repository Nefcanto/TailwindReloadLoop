import { component$ } from "@builder.io/qwik"
import Field from "./Field"

const Hidden = component$(({
    ariaLabel,
    class: internalClass,
    modelBind,
    placeholder,
    property,
    ...rest
}) => {

    const { label, value } = rest
    modelBind.value[property] = value

    return <Field {...rest}>
        <input
            type="hidden"
            aria-label={ariaLabel ?? label ?? placeholder}
            placeholder={placeholder}
            value={modelBind.value[property]}
        />
    </Field>
})

export default Hidden
