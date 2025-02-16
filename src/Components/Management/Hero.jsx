import { Image } from "Base"

const Hero = ({ aboutHero }) => {

    return <>
        <section class="flex items-center justify-center relative w-full aspect-[4/3] md:aspect-[6/2] border-b-8 border-custom-color1 mt-16 md:mt-20">
            <Image
                alt={aboutHero.title}
                containerClass="max-w-full w-1/1 h-full z-0"
                src={aboutHero.image}
            />
            <div class="absolute z-0 start-0 top-0 w-full h-full bg-black/40"></div>
            <h1 class="absolute z-20 w-full text-center text-2xl font-black px-5 text-custom-color1">{aboutHero.title}</h1>
        </section>
    </>
}

export default Hero
