import {
    readFileSync,
    writeFileSync,
} from "fs"
import { glob } from "glob"

const collectRichTextRenderers = () => {
    let searchPath = "./src/Modules/**/*RichText.jsx"
    let richTextComponentFiles = glob.sync(searchPath)
    let richTextComponentsContent = ""
    richTextComponentFiles.map(i => {
        const content = readFileSync(i).toString()
        const result = /export\s+default\s+(\w+)/.exec(content)
        if (result) {
            const componentName = result[1]
            const path = i.replace("./src", ".").replace(".jsx", "")
            richTextComponentsContent += `import ${componentName} from "${path}";\n`
            richTextComponentsContent += `export { ${componentName} };\n`
            richTextComponentsContent += `\n`
        }
    })
    writeFileSync("./src/RichTextComponents.jsx", richTextComponentsContent)
}

export default collectRichTextRenderers
