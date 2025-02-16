import {
    readFileSync,
    writeFileSync,
} from "fs"
import { glob } from "glob"

const collectPaginationBehaviors = () => {
    const paginationBehaviorModules = []
    let searchPathPaginationBehaviors = "./src/Modules/**/UsePaginationBehavior.jsx"
    let paginationBehaviorsComponentFiles = glob.sync(searchPathPaginationBehaviors)
    let paginationBehaviorsComponentsContent = ""
    paginationBehaviorsComponentFiles.map(i => {
        const content = readFileSync(i).toString()
        const result = /export\s+default\s+(\w+)/.exec(content)
        if (result) {
            const componentName = result[1]
            const module = i.split("/")[3]
            const path = i.replace("./src", ".").replace(".jsx", "")
            paginationBehaviorModules.push(module)
            paginationBehaviorsComponentsContent += `import ${componentName + module} from "${path}";\n`
            paginationBehaviorsComponentsContent += `export { ${componentName + module} };\n`
            paginationBehaviorsComponentsContent += `\n`
        }
    })
    console.log("These modules have pagination behavior")
    console.log(paginationBehaviorModules)
    writeFileSync("./src/PaginationBehaviors.jsx", paginationBehaviorsComponentsContent)
}

export default collectPaginationBehaviors
