import { PageHeader } from "Shared"
import { HeaderOffset } from "Layout"
import {
    Entity,
    Form,
    ProgressLine,
    Stages,
} from "FlowParts"

const Layout = props => {
    return <div class="pb-10">
        <HeaderOffset />
        <PageHeader title={props.seo?.pageTitle} />
        <Form {...props} />
        {/* <ProgressLine {...props} /> */}
        <div class="mx-auto max-w-md text-center mt-14">
            <Entity {...props} />
            <Stages {...props} />
        </div>
    </div>
}

export default Layout
