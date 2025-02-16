import { $ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import { kebabize } from "Base"

const useFiltering = () => {

    const { url } = useLocation()
    const { searchParams } = url

    const multiChoiceBehavior = (property, value) => {
        const kebabizedProperty = kebabize(property)
        return {
            onChange$: $(e => {
                const value = e.target.value
                const checked = e.target.checked
                const searchParams = new URLSearchParams(document.location.search)
                const urlFilter = searchParams.get(kebabizedProperty)
                if (urlFilter) {
                    let values = searchParams.get(kebabizedProperty).split(",").filter(i => i)
                    if (e.target.checked) {
                        values.push(value)
                    }
                    else {
                        values = values.filter(i => i !== value)
                    }
                    if (values.length === 0) {
                        searchParams.delete(kebabizedProperty)
                    }
                    else {
                        searchParams.set(kebabizedProperty, values.join(","))
                    }
                }
                else {
                    searchParams.set(kebabizedProperty, e.target.value)
                }
                searchParams.sort()
                document.location.search = searchParams.toString()
            }),
            checked: searchParams.get(kebabizedProperty)?.includes(value)
        }
    }

    return {
        multiChoiceBehavior
    }
}

export default useFiltering
