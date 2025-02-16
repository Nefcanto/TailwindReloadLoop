import { component$ } from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    CourseLayout,
    loadCourse,
} from "Courses"
import { Layout as RunnableLayout } from "CourseParts"

const Course = component$(() => {

    import("CourseParts").then(module => console.log(module))

    const data = loadCourse().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <CourseLayout {...data} />
})

export default Course

export { loadCourse }

const head = ({ resolveValue }) => {
    return useSeo(loadCourse, resolveValue)
}

export { head }
