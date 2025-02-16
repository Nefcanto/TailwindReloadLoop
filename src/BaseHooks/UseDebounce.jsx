import {
    $,
    useSignal,
} from "@builder.io/qwik"

const useDebounce = (callback, delay) => {

    const timeoutId = useSignal(null)

    return $(function (args) {
        clearTimeout(timeoutId.value)
        timeoutId.value = setTimeout($(() => {
            console.log(args)
            callback(args)
        }), delay || 400)
    })
}

export default useDebounce
