import { Image } from "Base"

const IntroductionCard = ({
    index,
    item,
}) => {

    return <>
        <section class={`flex flex-col gap-y-10 md:p-4 ${index % 2 === 0 ? " " : "bg-gray-100"}`}>
            <div
                class="p-5 max-w-7xl mx-auto"
                dir={index % 2 === 0 ? "rtl" : "ltr sm:text-end "}
            >
                <div class="md:flex items-center justify-center">
                    <div class="md:w-1/4 mb-3 md:mb-0">
                        <Image
                            alt={item.name}
                            containerClass="w-32 md:w-full aspect-square mx-auto border-4 border-custom-color1 rounded-full overflow-hidden"
                            imageClass="w-full h-full object-cover"
                            src={item.image}
                        />
                    </div>

                    <div class="md:w-3/4 px-4 md:px-8 lg:px-10 2xl:px-16">
                        <h1 class="font-black text-xl relative after:absolute after:h-1 after:bg-custom-color1 after:w-24 after:mx-auto after:mt-10 after:inset-x-0 text-center">
                            {item.name}</h1>
                        <h3 class="font-extrabold text-lg mt-8 text-center">{item.jobTitle}</h3>
                        <p class="text-lg sm:pt-8">{item.introduction}</p>
                    </div>
                </div>
                <div class="flex gap-3 flex-col-reverse md:flex-row md:mt-8 max-w-3xl mx-auto">
                    <div class="md:w-3/4 pt-3 md:p-8 border-t border-black md:border-t-0 md:border-e">
                        {item.quote &&
                            <p class="font-light md:font-extralight text-md lg:text-lg relative italic md:text-3xl line-clamp-6">
                                <span class="md:align-sub text-custom-color1 md:text-8xl md:p-3">«</span>
                                {item.quote}
                                <span class="text-custom-color1">»</span>
                            </p>
                        }
                    </div>
                    <div class="md:w-1/4 mt-3 md:mx-auto md:mt-auto md:mb-auto pt-4">
                        <strong class="font-black text-xl">{item.name}</strong>
                    </div>
                </div>
            </div>
        </section >

    </>
}

export default IntroductionCard
