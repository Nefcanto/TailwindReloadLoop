import { Image } from "Base"
import { useCourses } from "Courses"

const PurchasedCourses = ({
    localePathPrefix,
    purchasedCourses,
}) => {

    const { loadCourseUrl } = useCourses(localePathPrefix)

    return <>
        <section class="p-2">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 text-center">
                {purchasedCourses.map(course =>
                    <a
                        href={loadCourseUrl(course)}
                        key={course?.id}
                    >
                        <Image
                            containerClass="w-full aspect-[1.6/1] rounded-lg overflow-hidden"
                            imageClass="group-hover:scale-105 transition-all duration-1000"
                            src={course.relatedItems?.imageUrl}
                        />
                        <div class="w-full bg-custom-color1 -mt-10 sm:-mt-14 lg:-mt-10 p-4 rounded-lg relative mx-auto z-10">
                            <span class="text-lg text-white font-bold">{course.title}</span>
                        </div>
                    </a>
                )}
            </div>
        </section>
    </>
}

export default PurchasedCourses
