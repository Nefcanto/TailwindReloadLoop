import { component$ } from "@builder.io/qwik"
import { merge } from "Base"
import Field from "./Field"

const Check = component$(({
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
                class="w-6 aspect-square text-green-400 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:shadow-2xl"
                type="checkbox"
                aria-label={ariaLabel ?? label ?? placeholder}
                placeholder={placeholder}
                onInput$={(e) =>
                    modelBind.value[property] = e.target.checked.toString()
                }
            />
            <label>
                {label}
            </label>
        </div>
    </Field>
})

export default Check
