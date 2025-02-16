import { component$ } from "@builder.io/qwik"
import { Image } from "Base"
import { isRtl } from "Globalization"
import {
    Left,
    Right,
} from "Svg"

const MoreAboutUsCard = component$(({ item }) => {

    return <>
        <div class="relative w-full h-[400px] md:w-[600px] text-center group after:absolute after:w-full after:h-full after:start-0 after:top-0 after:bg-gradient-to-t from-black/70 to-transparent z-10">
            <div class="absolute inset-x-0 mx-auto top-[40%] min-w-[200px] z-20">
                <p class="line-clamp-2 h-[68px] font-extrabold text-[2.2rem] text-white text-center">{item.title}</p>
                <a
                    href={item.link}
                    class="block relative"
                >
                    <span
                        class="block w-fit mx-auto translation-all duration-200 md:group-hover:px-16 border-2 rounded-full border-custom-color1 p-2"
                    >
                        {
                            isRtl() ?
                                <Left class="block w-6 h-6 fill-white duration-200 transition-all md:group-hover:translate-x-14 mx-auto w-fit" />
                                :
                                <Right class="block w-6 h-6 fill-white duration-200 transition-all md:group-hover:-translate-x-14 mx-auto w-fit" />
                        }
                    </span>
                    <span class={`text-white absolute top-1/2 start-1/2 duration-400 invisible md:group-hover:visible -translate-y-1/2 opacity-0 md:group-hover:opacity-100 transition-all ${isRtl() ? "translate-x-full md:group-hover:translate-x-1/2" : "-translate-x-full md:group-hover:-translate-x-1/2"}`}>
                        {item.buttonText}
                    </span>
                </a>
            </div>
            <Image
                containerClass="max-w-full w-1/1 h-full"
                src={item.image}
                alt={item.alt}
            />
        </div>
    </>
})

export default MoreAboutUsCard
