import { component$ } from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    loadInstructor,
    InstructorLayout,
} from "Courses"
import { Layout as RunnableLayout } from "InstructorParts"

const Instructor = component$(() => {

    const data = loadInstructor().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <InstructorLayout {...data} />
})

export default Instructor

export { loadInstructor }

const head = ({ resolveValue }) => {
    return useSeo(loadInstructor, resolveValue)
}

export { head }
