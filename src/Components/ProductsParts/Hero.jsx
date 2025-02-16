import { Image } from "Base"
import { Search } from "ProductsParts"

const Hero = ({
    productsHero,
    ...rest
}) => {

    return <>
        <section class="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-y-2.5 h-auto">
            <div class="lg:order-2 relative flex items-center justify-center w-full aspect-square lg:aspect-none">
                <div class="absolute end-4 sm:end-10 inset-y-0 w-[90%] sm:w-[85%] bg-custom-color1 rounded-xl lg:rounded-b-none z-10" />
                <div class="absolute start-0 inset-y-0 bg-custom-color25 w-0 lg:w-[15%]" />
                <Image
                    alt={productsHero?.imageAlt}
                    containerClass="absolute inset-0 h-full max-w-full xs:w-[350px] xs:w-[630px] md:w-[760px] lg:w-[510px] xl:w-[635px] z-20"
                    imageClass="object-contain w-full h-full"

                    src={productsHero?.image}
                />
            </div>
            <div class="lg:order-1 flex flex-col gap-2 bg-custom-color25 rounded-xl lg:rounded-none lg:rounded-ss-xl py-2.5 px-2.5 lg:px-5 lg:pt-5">
                {
                    productsHero?.title && <>
                        <h2 class="font-black text-xl 2xl:text-2xl">
                            {productsHero?.title}
                        </h2>
                    </>
                }
                {
                    productsHero?.subtitle && <>
                        <h3 class="text-custom-color2/80 font-bold text-lg 2xl:text-xl">
                            {productsHero?.subtitle}
                        </h3>
                    </>
                }
                {
                    productsHero?.description && <>
                        <p class="lg:pt-2">
                            {productsHero?.description}
                        </p>
                    </>
                }
                <Search {...rest} />
            </div>
        </section>
    </>
}

export default Hero
