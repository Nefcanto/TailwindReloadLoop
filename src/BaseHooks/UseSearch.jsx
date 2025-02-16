import {
    $,
    useSignal,
} from "@builder.io/qwik"
import { get } from "Base"
import useDebounce from "./UseDebounce"

const useSearch = navigationUrl => {

    const term = useSignal("")
    const userIsSearching = useSignal(false)
    const systemIsSearching = useSignal(false)
    const result = useSignal({})
    const error = useSignal("")
    const searchTranslations = [
        "Search",
        "NoResultsFound",
        "Results",
    ]

    const debounce = useDebounce($(value => {
        systemIsSearching.value = true
        get(`/search/perform?term=${term.value}`)
            .then(data => {
                result.value = data
                systemIsSearching.value = false
            }, e => {
                error.value = e
                systemIsSearching.value = false
            })
    }))

    const handleInput = $(e => {
        term.value = e.target.value
        systemIsSearching.value = false
        debounce(e.target.value)
    })

    const handleKeyDown = $(e => {
        if (e.key === "Enter") {
            if (navigationUrl) {
                const url = navigationUrl + (navigationUrl.includes("?") ? `&search=${term.value}` : `?search=${term.value}`)
                document.location = url
            }
            else {
                document.location = `/search?term=${term.value}`
            }
        }
    })

    const searchInputBehavior = {
        id: "searchInput",
        onInput$: handleInput,
        onKeyDown$: handleKeyDown,
        onFocus$: $(e => userIsSearching.value = true),
        value: term.value,
    }

    const leavingSearchBehavior = {
        onOutsideClick: $(e => userIsSearching.value = false)
    }

    return {
        error: error.value,
        hasResults: result.value?.hasResults || false,
        systemIsSearching: systemIsSearching.value,
        userIsSearching: userIsSearching.value,
        searchInputBehavior,
        leavingSearchBehavior,
        searchTranslations,
        ...result.value
    }
}

export default useSearch
