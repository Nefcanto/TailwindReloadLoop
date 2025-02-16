import {
    $,
    component$,
    Slot,
    useOnWindow,
    useSignal,
} from "@builder.io/qwik"
import { merge } from "Base"

const ScrollToTop = component$(({ class: internalClass }) => {

    const isShown = useSignal(false)

    useOnWindow(
        "scroll",
        $((event) => {
            if (window.scrollY > 0) {
                isShown.value = true
            } else if (window.scrollY == 0) {
                isShown.value = false
            }
        })
    )

    const clickToTopHandler = $(() => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        })
    })

    const isIncludeYPosition = internalClass.includes("start-") || internalClass.includes("end-")
    return <>
        {
            isShown.value
                ?
                <div
                    class={merge("fixed z-50 cursor-pointer duration-300 bottom-20", internalClass, !isIncludeYPosition && "end-20")}
                    onClick$={clickToTopHandler}
                >
                    <Slot />
                </div>
                :
                <div></div>
        }
    </>

})

export default ScrollToTop
// coded with love
