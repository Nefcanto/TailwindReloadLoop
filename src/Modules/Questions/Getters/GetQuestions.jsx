import { getFromCacheOrApi } from "Base"

const getQuestions = async props => {
    const posts = await getFromCacheOrApi("/questions/data", props)
    return posts
}

export default getQuestions
