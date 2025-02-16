import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import Accordion from "./Accordion"

const FaqPages = component$(({
    arrowClass,
    containerClass,
    faqPages,
}) => {

    const activeAccordionId = useSignal()
    const accordionClickHandler = $((id) => {
        if (id === activeAccordionId.value) {
            activeAccordionId.value = ""
        } else {
            activeAccordionId.value = id
        }
    })

    return <>
        {
            faqPages && faqPages?.length > 0 &&
            <div class="my-5 flex flex-col gap-.5">
                {
                    faqPages.map((faq) => <>
                        <Accordion
                            arrowClass={arrowClass}
                            clickHandler={accordionClickHandler}
                            containerClass={containerClass}
                            isOpen={activeAccordionId?.value === faq?.id}
                            item={faq}
                            key={faq?.id}
                            title={faq?.question}
                        >
                            {faq.answer}
                        </Accordion>
                    </>
                    )
                }
            </div>
        }
    </>
})

export default FaqPages
