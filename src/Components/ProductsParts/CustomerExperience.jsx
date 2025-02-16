import { Image } from "Base"

const CustomerExperience = ({ customerExperience }) => {

    return <>
        <section class="w-full bg-custom-color25 py-4 lg:py-5 mt-8 md:mt-12">
            <div class="flex flex-col items-center justify-center max-w-screen-md mx-auto">
                <h2 class="font-black text-xl 2xl:text-2xl">
                    {customerExperience?.title}
                </h2>
                <p class="text-custom-color2/80 pt-2.5 lg:pt-4 mb-5 lg:mb-8">
                    {customerExperience?.description}
                </p>
                <Image
                    alt={customerExperience?.title}
                    containerClass="w-full sm:w-[500px] h-auto aspect-[2]"
                    imageClass="w-full h-full object-contain"
                    src={customerExperience?.image}
                />
            </div>
        </section>
    </>
}

export default CustomerExperience
