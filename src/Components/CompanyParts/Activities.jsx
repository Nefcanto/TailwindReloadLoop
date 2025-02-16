import {
    lg,
    md,
    Swiper,
    SwiperSlide,
    zero,
} from "Base"

const Activities = ({ activities }) => {

    return <>
        <section class="p-4">
            <Swiper
                config={{
                    slidesPerView: 3,
                    spaceBetween: 20,
                    breakpoints: {
                        [zero]: { slidesPerView: 1 },
                        [md]: { slidesPerView: 2 },
                        [lg]: { slidesPerView: 3 },
                    },
                }}
                containerClass="max-w-7xl m-auto"
                name="activitiesSlider"
            >
                {
                    activities.map(item => <SwiperSlide
                        key={item.id}
                    >
                        <div class="mt-7">
                            <h2 class="text-center text-lg font-black relative after:absolute after:h-1 after:bg-custom-color1 after:mx-auto after:w-20 after:inset-x-0 after:top-8">
                                {item.title}
                            </h2>
                            <div class="p-4 mt-5 rounded-lg bg-white border border-custom-color24">
                                <p class="h-[240px] line-clamp-10">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    </>
}

export default Activities
