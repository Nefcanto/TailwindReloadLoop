import { Pagination } from "Shared"
import {
    Categories,
    Form,
    Heading,
    Main,
} from "Questions"

const Layout = ({
    fields,
    questions,
    seo,
    translations,
    ...rest
}) => {

    return <>
        <section class="mb-5">

            <Heading title={seo?.pageTitle} />

            <div class="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row gap-10">

                <Main {...rest} />

                <Categories {...rest} />

                <Form
                    class="flex lg:hidden"
                    {...fields}
                    {...translations}
                    {...rest}
                />

            </div>

            <Pagination metadata={questions.metadata} />

        </section>
    </>
}

export default Layout
