import { Image } from "Base"

const Property = ({ rawMaterialProperty }) => {

    return <>
        <section class="max-w-7xl mx-auto p-8 mt-8 md:grid md:grid-cols-2">
            <Image
                containerClass="max-w-full w-1/1 aspect-[5/3]"
                imageClass="rounded-lg"
                src={rawMaterialProperty.image}
            />
            <div class="flex flex-col justify-start items-start rounded-lg bg-gray-300 md:opacity-80 p-6 mt-2 md:mt-32 md:-ms-10 gap-5">
                <span class="text-xl font-bold after:h-[3px] after:mt-1">
                    {rawMaterialProperty.title}
                </span>

                <p>{rawMaterialProperty.description}</p>
                <div class="flex flex-col md:flex-row justify-center items-center gap-5 mx-auto">
                    {
                        rawMaterialProperty.items.map(item =>
                            <div
                                class="flex flex-col justify-center items-center"
                                key={item.id}
                            >
                                <div
                                    class="fill-yellow-500 hover:scale-125 duration-300 transition-all w-28 aspect-square p-8"
                                    dangerouslySetInnerHTML={item.icon}
                                />
                                <span class="font-bold text-md text-sky-700 text-center">
                                    {item.title}
                                </span>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    </>

}

export default Property
