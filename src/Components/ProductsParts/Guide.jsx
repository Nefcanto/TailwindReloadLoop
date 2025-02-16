import { Image } from "Base"

const Guide = ({ productsGuide }) => {

    return <>
        <section class="flex flex-col items-center justify-center mt-8 md:mt-12">
            <nav class="space-y-2">
                <h2 class="text-center font-black text-xl 2xl:text-2xl">
                    {productsGuide?.title}
                </h2>
                <h3 class="text-center text-custom-color2/80 font-bold text-lg 2xl:text-xl mb-5 lg:mb-8">
                    {productsGuide?.subtitle}
                </h3>
                <ul class="w-full flex flex-col sm:flex-row gap-2.5 max-w-screen-lg justify-between items-center">
                    {
                        productsGuide?.items?.map(item => <li
                            class="flex flex-col gap-2.5 justify-center items-center w-48 text-center"
                            key={item.id}
                        >
                            <Image
                                containerClass="w-20 h-auto aspect-square rounded-xl"
                                imageClass="w-full h-full object-contain"
                                src={item?.logo}
                            />
                            <p>
                                {item?.title}
                            </p>
                            <p class="text-xs lg:text-sm pt-1.5 lg:pt-2.5">
                                {item?.description}
                            </p>
                        </li>)
                    }
                </ul>
            </nav>
        </section>
    </>
}

export default Guide
