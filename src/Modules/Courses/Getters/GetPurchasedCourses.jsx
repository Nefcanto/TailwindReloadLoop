import { get } from "Base"

const getPurchasedCourses = async (props, session) => {
    if (session?.user?.guid) {
        const { courses } = await get(`/learner/getCourses?userGuid=${session.user.guid}`)
        return courses
    }
}

export default getPurchasedCourses
