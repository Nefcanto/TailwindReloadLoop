import camelize from "./Camelize"

const setting = (key) => {
    if (!globalThis.settings) {
        return ""
    }
    const value = globalThis.settings[key]
    if (value) {
        return value
    }
    key = camelize(key)
    return globalThis.settings[key]
}

export default setting
