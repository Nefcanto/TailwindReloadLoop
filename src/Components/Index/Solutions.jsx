import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import {
    Image,
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xs,
    zero,
} from "Base"
import {
    Cta,
    Paragraph,
    Title,
} from "Shared"

const Solutions = component$(({
    ctaLink,
    ctaText,
    description,
    isRtl,
    items,
    title,
}) => {

    const hoveredItem = useSignal(items?.[0])

    const titleClass = "text-center text-white text-md lg:text-3xl font-black w-5/6 mx-auto"
    const svg = (item, style) => <div
        dangerouslySetInnerHTML={item.svg}
        class={"w-16 h-16 text-white fill-white mx-auto transition-all duration-500 " + style}
    />

    return <div class="solutions py-20 w-full xxl:max">
        <Title text={title} />
        <Paragraph
            text={description}
            class="mt-6 mb-10 px-6 text-md md:max-w-xl xl:max-w-2xl text-md mx-auto"
        />
        <Swiper
            name="solutionsSlider"
            containerClass="h-full px-6 mt-20 pb-12 lg:px-[66px] w-full md:hidden"
            config={{
                slidesPerView: 1,
                spaceBetween: 15,
            }}
        >
            {
                items?.map(item => <SwiperSlide
                    key={item.id}
                    class="w-full h-[200px] relative cursor-pointer overflow-hidden group"
                >
                    <a href={item.link}>
                        <Image
                            containerClass="brightness-75 group-hover:brightness-50 transition-all duration-500 absolute top-0 end-0 bottom-0 start-0 max-w-full w-1/1"
                            src={item.mobileImage}
                            alt={item.title}
                        />

                        <div class="absolute top-0 bottom-0 start-0 end-0 inset-0 m-auto bg-slate-800 opacity-40" />
                        <div class="absolute bottom-5 start-5 m-auto flex flex-row items-center justify-start gap-10 sm:gap-5 w-full">
                            <div>{svg(item)}</div>
                            <span
                                class="trucks-wide w-fit text-center text-white font-bold text-md line-clamp-2"
                            >
                                {item.title}
                            </span>
                        </div>
                    </a>
                </SwiperSlide>)
            }
        </Swiper>
        <div class="hidden md:block md:px-6 lg:px-8 xl:px-16 2xl:px-32">
            <div class="flex gap-1 relative">
                <Image
                    containerClass="absolute top-0 end-0 bottom-0 start-0 max-w-full w-1/1 transition-all"
                    src={hoveredItem.value?.mobileImage}
                    alt={hoveredItem.value?.title}
                />
                {
                    items?.map(item => <a
                        href={item.link}
                        key={item.id}
                        class="w-1/5 h-[475px] lg:h-[430px] xl:h-[470px] 2xl:h-[505px] relative cursor-pointer overflow-hidden group relative group"
                        onMouseEnter$={() => hoveredItem.value = item}
                    >
                        <div class="absolute top-0 bottom-0 start-0 end-0 inset-0 m-auto bg-slate-800 opacity-40 group-hover:opacity-60 transition-all" />
                        <div class="absolute h-[50%] inset-0 m-auto flex flex-col items-center gap-y-6">
                            {svg(item, " group-hover:scale-125 ")}
                            <span
                                class={titleClass + "flex flex-row justify-center items-center mx-auto bottom-[40%] trucks-wide h-[100px]"}
                            >
                                {item.title}
                            </span>
                        </div>
                    </a>)
                }
            </div>
        </div>
        <Cta
            link={ctaLink}
            text={ctaText}
            class="mt-8 w-44"
        />

    </div>
})

export default Solutions
