import { component$ } from "@builder.io/qwik"
import { merge } from "Base"
import Field from "./Field"

const MultiSelect = component$(({
    ariaLabel,
    choices,
    class: internalClass,
    modelBind,
    placeholder,
    property,
    ...rest
}) => {

    const { label } = rest

    return <Field {...rest}>
        <select
            multiple
            class={merge("w-full mt-2 rounded-md px-4 py-2 focus:outline-hidden placeholder-gray-500", internalClass)}
            aria-label={ariaLabel ?? label ?? placeholder}
            placeholder={placeholder}
            value={modelBind.value[property]}
            onInput$={(e) => {
                let value = Array.from(e.target.selectedOptions, option => option.value)
                modelBind.value[property] = value.join(",").toString()
            }}
        >
            {
                choices?.map(choice => <option
                    key={choice.id}
                    value={choice.choice}>
                    {choice.choice}
                </option>
                )
            }
        </select>
    </Field>
})

export default MultiSelect
