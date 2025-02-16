import { getFromCacheOrApi } from "Base"
import { useMappingSettings } from "Settings"

const getApplicationSettings = async (props) => {
    const settings = await getFromCacheOrApi("/entitySettings/all", props)
    let mappedSettings = useMappingSettings(settings)
    return {
        settings: mappedSettings
    };
}

export default getApplicationSettings
