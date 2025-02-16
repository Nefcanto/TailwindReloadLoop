import { camelize } from "Base"

const applyGranularity = (translations, text, module) => {
    const camelizedText = camelize(text)
    if (translations[camelizedText]) {
        return translations[camelizedText]
    }
    if (translations[`common${text}`]) {
        return translations[`common${text}`]
    }
    if (module) {
        module = camelize(module)
        if (translations[`${module}${text}`]) {
            return translations[`${module}${text}`]
        }
    }
    if (translations[`infra${text}`]) {
        return translations[`infra${text}`]
    }
    return `${text}`
}

export default applyGranularity
