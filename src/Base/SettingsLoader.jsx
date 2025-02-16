import {
    existsSync,
    readFileSync,
} from "fs"
import path from "path"

const parseJson = (filePath, content) => {
    try {
        const json = JSON.parse(content)
        return json
    } catch (e) {
        console.log(`Error parsing JSON in ${filePath}`)
    }
}

const getJson = name => {
    let filePath = path.join(process.cwd(), "public", name)
    let json = {}
    if (existsSync(filePath)) {
        const content = readFileSync(filePath)
        json = parseJson(filePath, content)
    }
    filePath = path.join(process.cwd(), "dist", name)
    if (existsSync(filePath)) {
        const content = readFileSync(filePath)
        json = parseJson(filePath, content)
    }
    return json
}

const loadSettings = async isDeveloping => {
    if (!isDeveloping) {
        return {}
    }

    const settingsJson = getJson("Settings.json")
    const settingsOverrideJson = getJson("SettingsOverride.json")
    const localSecretsJson = getJson("LocalSecrets.json")

    const settings = {
        ...settingsJson,
        ...settingsOverrideJson,
        ...localSecretsJson,
    }
    for (const setting in settings) {
        const value = settings[setting]
        if (value.endsWith && value.endsWith("/")) {
            throw `Do not end URLs with slash in settings. Fix the ${value}`
        }
    }
    console.log(settings)
    return settings
}

export default loadSettings
