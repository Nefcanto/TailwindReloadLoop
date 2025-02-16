import { component$ } from "@builder.io/qwik"
import { Image } from "Base"
import { isRtl } from "Globalization"
import {
    Left,
    Right,
} from "Svg"

const Companies = component$(({ companies }) => {

    const { data, metadata } = companies

    return <>
        <section class="relative mt-48 mb-48 p-8">
            <div class="grid grid-cols-1 px-3 items-center justify-center gap-2 md:grid-cols-3 md:gap-3">
                {
                    data?.map(item => <div
                        class="w-full h-80 2xl:h-[28rem] relative text-center relative after:absolute after:w-full after:h-full after:start-0 after:top-0 after:bg-gradient-to-t from-black/70 to-transparent after:z-10 "
                        key={item?.key}
                    >
                        <div class={`absolute start-[50%] text-white text-2xl translate-y-1/2 top-[30%] z-20 ${isRtl() ? "translate-x-1/2" :
                            "-translate-x-1/2 "}`}>
                            <span class="h-[68px] flex items-center justify-center text-xl xl:text-2xl font-extrabold">
                                {item.displayName}</span>
                            <a
                                href={`/company/${item.slug}`}
                                class="block w-fit transition-all duration-200 rounded-full p-2 md:hover:px-8 mx-auto mt-3 xl:mt-5 border-2 border-custom-color1"
                            >
                                {
                                    isRtl() ?
                                        <Left class="block w-6 h-6 fill-white" />
                                        :
                                        <Right class="block w-6 h-6 fill-white" />
                                }
                            </a>
                        </div>
                        <Image
                            containerClass="max-w-full w-1/1 h-full"
                            src={item.relatedItems.imageUrl}
                        />
                    </div>)
                }
            </div>
        </section>

    </>
})

export default Companies
