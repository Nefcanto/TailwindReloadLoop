import { getFromCacheOrApi } from "Base"

const getRecommendedProjects = async props => {
    const projects = await getFromCacheOrApi(`/project/recommendedProjects`, props)
    return projects
}

export default getRecommendedProjects
