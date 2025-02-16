import { component$ } from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    loadTestimonials,
    TestimonialsLayout,
} from "Testimonials"
import { Layout as RunnableLayout } from "TestimonialsParts"

const Index = component$(() => {

    const data = loadTestimonials().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <TestimonialsLayout {...data} />
})

export default Index

export { loadTestimonials }

const head = ({ resolveValue }) => {
    return useSeo(loadTestimonials, resolveValue)
}

export { head }
