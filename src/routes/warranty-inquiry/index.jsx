import { component$ } from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    loadWarrantyInquiry,
    WarrantyInquiryLayout,
} from "Warranty"
import { Layout as RunnableLayout } from "WarrantyInquiryParts"

const WarrantyInquiry = component$(() => {

    const data = loadWarrantyInquiry().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <WarrantyInquiryLayout {...data} />
})

export default WarrantyInquiry

export { loadWarrantyInquiry }

const head = ({ resolveValue }) => {
    return useSeo(loadWarrantyInquiry, resolveValue)
}

export { head }
