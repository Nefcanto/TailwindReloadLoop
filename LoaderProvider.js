import {
    existsSync,
    mkdirSync,
    readFileSync,
    writeFileSync,
} from "fs"
import { glob } from "glob"
import path from "path"

const provideLoaders = () => {
    let indexesSearchPath = "./src/**/index.jsx"
    let indexFiles = glob.sync(indexesSearchPath)
    let loadersSearchPath = "./src/Loaders/*"
    let existingLoaderFiles = glob.sync(loadersSearchPath)
    let neededRunnableLoaders = []
    let existingRunnableLoaders = []

    existingRunnableLoaders = existingLoaderFiles.map(loaderFilePath => {
        const loaderFileName = path.parse(loaderFilePath).name
        let loaderName = loaderFileName.charAt(0).toLowerCase() + loaderFileName.slice(1)
        return loaderName
    })

    indexFiles.map(i => {
        const content = readFileSync(i).toString()
        const result = new RegExp("^.*Loaders.*$", "gm").exec(content)
        if (result) {
            const neededRunnableLoader = new RegExp(/load[A-Za-z]*/, "gm").exec(result[0])[0]
            neededRunnableLoaders.push(neededRunnableLoader)
        }
    })

    const exportStatements = neededRunnableLoaders.map(loaderName => `export { ${loaderName} }\n`)

    let importStatements = []

    let nonExistentRunnableLoaderDefinitions = []

    neededRunnableLoaders.forEach(neededRunnableLoader => {
        if (existingRunnableLoaders.includes(neededRunnableLoader)) {
            importStatements.push(`import ${neededRunnableLoader} from "./Loaders/${neededRunnableLoader.charAt(0).toUpperCase() + neededRunnableLoader.slice(1)}.jsx"\n`)
        } else {
            nonExistentRunnableLoaderDefinitions.push(`
const ${neededRunnableLoader} = routeLoader$(async (props) => {
    const data = null
    return null
})

`)
        }
    })

    let exportsFileContent = `import { routeLoader$ } from "@builder.io/qwik-city"\n`

    importStatements.map(importStatement => exportsFileContent += importStatement)
    nonExistentRunnableLoaderDefinitions.map(loaderDefinition => exportsFileContent += loaderDefinition)
    exportStatements.map(exportStatement => exportsFileContent += exportStatement)

    writeFileSync("./src/Loaders.jsx", exportsFileContent)
}

export default provideLoaders
