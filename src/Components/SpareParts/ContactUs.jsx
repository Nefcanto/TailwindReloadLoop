import { Image } from "Base"
import { Left } from "Svg"

const ContactUs = ({ sparePartsContactUs }) => {

    return <>
        <section class="bg-cyan-800 w-full pt-10 pb-10 mt-10">
            <div class="flex flex-row justify-between">
                <div class="flex flex-col justify-between items-start gap-5 px-3 w-full md:max-w-2xl mx-auto">
                    <p class="text-md md:text-xl text-white font-bold leading-loose w-full">
                        {sparePartsContactUs.description}
                    </p>
                    <a
                        class="hover:scale-110 duration-300 transition-all"
                        href=""
                    >
                        <div class="flex flex-row justify-between items-center border-2 border-custom-color24 rounded-lg p-2 gap-5 w-full">
                            <span class="text-md font-bold text-custom-color1 mx-auto">
                                {sparePartsContactUs.iconTitle}
                            </span>
                            <Left class="w-6 h-6 fill-custom-color1" />
                        </div>
                    </a>
                </div>
                <div class="flex justify-end items-end -mb-10 md:-mb-16 xl:-mb-20 h-fit m-auto">
                    <Image
                        containerClass="w-32 lg:w-44 xl:w-60 aspect-square overflow-hidden absolute"
                        src={sparePartsContactUs?.image}
                    />
                </div>
            </div>
        </section>
    </>
}

export default ContactUs
