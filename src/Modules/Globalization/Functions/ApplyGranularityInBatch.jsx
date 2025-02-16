import { camelize } from "Base"
import { applyGranularity } from "Globalization"

const applyGranularityInBatch = (translations, texts, module) => {
    for (const index in texts) {
        const text = texts[index]
        const camelizedText = camelize(text)
        translations[camelizedText] = applyGranularity(translations, text, module)
    }
}

export default applyGranularityInBatch
