import {
    component$,
    Slot,
    useVisibleTask$,
} from "@builder.io/qwik"
import { getRandomId } from "Base"

const AutoCloseOnOutsideClick = component$(({ onOutsideClick }) => {

    const randomId = getRandomId()

    useVisibleTask$(() => {
        document.addEventListener('click', (event) => {
            if (!event.target.closest(`#${randomId}`)) {
                const element = document.getElementById(randomId)
                if (element) {
                    element.style.display = "none"
                }
                else {
                    console.warn(`No element found with id "${randomId}"`)
                }
                if (onOutsideClick instanceof Function) {
                    onOutsideClick()
                }
            }
        });

    }, {
        strategy: "document-ready"
    })

    return <div id={randomId}>
        <Slot />
    </div>
})

export default AutoCloseOnOutsideClick
