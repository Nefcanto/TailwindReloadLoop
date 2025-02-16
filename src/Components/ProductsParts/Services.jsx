import {
    Image,
    merge,
} from "Base"

const Services = ({ productsServices }) => {

    return <>
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-y-2.5 lg:gap-x-5 mt-8 md:mt-12">
            <Image
                alt={productsServices.imageAlt}
                containerClass="w-full aspect-square"
                imageClass="w-full h-full object-contain"
                lqip
                src={productsServices?.image}
            />
            <nav class="space-y-2">
                <h2 class="font-black text-xl 2xl:text-2xl">
                    {productsServices?.title}
                </h2>
                <h3 class="text-custom-color2/80 font-bold text-lg 2xl:text-xl mb-5 lg:mb-8">
                    {productsServices?.subtitle}
                </h3>
                <ul class="flex flex-col gap-2.5">
                    {
                        productsServices?.items?.map(item => <li
                            class="flex items-start gap-2.5"
                            key={item.id}
                        >
                            <div>
                                <div
                                    class={merge("flex items-center justify-center w-8 aspect-square rounded-xl [&>svg]:h-5 [&>svg]:mx-auto", item?.featured ? "bg-custom-color1" : "bg-custom-color25")}
                                    dangerouslySetInnerHTML={item?.icon}
                                />
                            </div>
                            <div>
                                <p class="text-md font-semibold">
                                    {item?.title}
                                </p>
                                <p class="text-xs lg:text-sm">
                                    {item?.description}
                                </p>
                            </div>
                        </li>)
                    }
                </ul>
            </nav>
        </section >
    </>
}

export default Services
