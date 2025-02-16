import { getFromCacheOrApi } from "Base"
import { getApplicationSettings } from "Settings"

const getCoursesBySettingKeys = async (settingKeys, props) => {
    const { settings } = await getApplicationSettings(props)
    let csv = ""
    settingKeys.forEach(key => csv += `,${settings[key] || ""}`)
    const settingKeysCsv = settingKeys.join(",")
    const courses = await getFromCacheOrApi(`/courses/getCoursesBySettingKeys?settingKeysCsv=${settingKeysCsv}`, props)
    for (let course in courses) {
        if (course === "milliseconds") {
            continue
        }
        // const key = getKeyFromValue(course)
        // courses[key] = courses[course]
    }
    return courses
}

export default getCoursesBySettingKeys
