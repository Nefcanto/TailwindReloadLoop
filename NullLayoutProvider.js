import {
    existsSync,
    mkdirSync,
    readFileSync,
    writeFileSync,
} from "fs"
import { glob } from "glob"

const provideNullLayouts = () => {
    var searchPath = "./src/**/index*.jsx"
    let indexFiles = glob.sync(searchPath)
    let barrels = []
    indexFiles.map(i => {
        const content = readFileSync(i).toString()
        const result = new RegExp("from\\s*.?(\\w+Parts)", "gm").exec(content)
        if (result) {
            const partsBarrel = result[1]
            if (!existsSync(`./src/Components/${partsBarrel}`)) {
                barrels.push(partsBarrel)
            }
        }
    })
    console.log(`Default layouts used for:`)
    console.log(barrels)

    barrels.map(barrel => {
        const path = `./src/Components/${barrel}`
        if (!existsSync(path)) {
            mkdirSync(path)
        }
        const nullExport = `const Layout = null

    export { Layout }
    `
        writeFileSync(`${path}/Exports.jsx`, nullExport)
    })
    return barrels
}

export default provideNullLayouts
