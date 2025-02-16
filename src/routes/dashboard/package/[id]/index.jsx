import { component$ } from "@builder.io/qwik"
import {
    PackageLayout,
    loadPackage,
} from "Sales"
import { Layout as RunnableLayout } from "PackageParts"

const Index = component$(props => {

    const data = loadPackage().value

    return RunnableLayout
        ?
        <RunnableLayout
            {...data}
        />
        :
        <PackageLayout
            {...data}
        />

})

export default Index

export { loadPackage }
