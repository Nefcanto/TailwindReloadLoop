import { component$ } from "@builder.io/qwik"
import { useLocalizedDate } from "Base"

const LocalizedDate = component$(({
    localeKey,
    localesEnum,
    utcDate
}) => {

    return <>
        <span>
            {
                useLocalizedDate({
                    localeKey,
                    localesEnum,
                    utcDate
                })
            }
        </span>
    </>
})

export default LocalizedDate
