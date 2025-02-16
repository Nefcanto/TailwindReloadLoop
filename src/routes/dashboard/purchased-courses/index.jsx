import { component$ } from "@builder.io/qwik"
import {
    loadPurchasedCourses,
    PurchasedCourses,
} from "Courses"

const Index = component$(() => {

    const data = loadPurchasedCourses().value

    return <PurchasedCourses
        {...data}
    />
})

export default Index

export { loadPurchasedCourses }
