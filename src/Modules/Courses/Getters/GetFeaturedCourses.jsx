import { getFromCacheOrApi } from "Base"

const getFeaturedCourses = async (count, props) => {
    const courses = await getFromCacheOrApi(`/courses/GetFeaturedCourses?count=${count}`, props)
    return courses
}

export default getFeaturedCourses
