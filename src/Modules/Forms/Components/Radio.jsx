import { component$ } from "@builder.io/qwik"
import Field from "./Field"

const Radio = component$(({
    ariaLabel,
    class: internalClass,
    label,
    modelBind,
    placeholder,
    property,
    ...rest
}) => {
    return <Field {...rest}>
        <div class="flex items-center gap-2">
            <input
                class="w-5 aspect-square text-blue-600 rounded-sm focus:ring-blue-500 focus:shadow-2xl"
                type="radio"
                aria-label={ariaLabel ?? label ?? placeholder}
                placeholder={placeholder}
                onInput$={(e) => modelBind.value[property.toLowerCase()] = e.target.value}
            />
            <label>
                {label}
            </label>
        </div>
    </Field>
})

export default Radio
