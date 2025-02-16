import { getFromCacheOrApi } from "Base"

const getLatestProjects = async props => {
    const projects = await getFromCacheOrApi(`/project/LatestProjects`, props)
    return projects
}

export default getLatestProjects
