const useCourses = localePathPrefix => {

    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }

    const loadCourseUrl = course => {
        return `${localePathPrefix}/course/${course?.slug}`
    }
    const loadCourseCategoryUrl = hierarchy => {
        return `${localePathPrefix}/courses/category/${hierarchy?.slug}`
    }

    const loadCourseTagUrl = tag => {

        return `${localePathPrefix}/courses/tag/${tag?.slug}`
    }

    const loadCoursesUrl = () => {

        return `${localePathPrefix}/courses`
    }

    return {
        loadCourseCategoryUrl,
        loadCoursesUrl,
        loadCourseTagUrl,
        loadCourseUrl,
    }
}

export default useCourses
