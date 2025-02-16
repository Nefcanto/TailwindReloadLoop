import { component$ } from "@builder.io/qwik"
import {
    PackagesLayout,
    loadPackages,
} from "Sales"
import { Layout as RunnableLayout } from "PackagesParts"

const Index = component$(props => {
    const data = loadPackages().value
    return RunnableLayout
        ?
        <RunnableLayout
            {...data}
        />
        :
        <PackagesLayout
            {...data}
        />
})

export default Index

export { loadPackages }
