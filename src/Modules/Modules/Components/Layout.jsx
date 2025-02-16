import { component$ } from "@builder.io/qwik"
import { CompareTable } from "Modules"

const Layout = component$(({ entitiesToBeCompared }) => <>
    <section class="max-w-6xl mx-auto px-4 2xl:px-0 my-5 my-10 min-h-[50vh]">
        <CompareTable entitiesToBeCompared={entitiesToBeCompared} />
    </section>
</>
)

export default Layout
