import {
    readFileSync,
    writeFileSync,
} from "fs"

const settingsCreator = () => {
    const settingsJsonContent = readFileSync("./Settings.json").toString()
    const settingsJson = JSON.parse(settingsJsonContent);
    let settingsContent = ""
    for (const key in settingsJson){
        if(settingsJson.hasOwnProperty(key)){
            settingsContent += `const ${key} = "${settingsJson[key]}"\n`
            settingsContent += `export { ${key} }\n\n`
        }
    }
    writeFileSync("./src/Settings.jsx", settingsContent)
    return settingsJson
}

export default settingsCreator
