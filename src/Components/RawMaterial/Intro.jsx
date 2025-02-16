import { Title } from "Shared"

const Intro = ({ rawMaterialIntro }) => {

    return <>
        <section class="max-w-7xl mt-10 mx-auto">
            <Title
                class="after:h-[3px] after:mt-1"
                text={rawMaterialIntro.title}
            />
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center gap-5 mt-10 max-w-5xl mx-auto">
                {
                    rawMaterialIntro.items.map(item =>
                        <div
                            class="flex flex-col justify-center items-center gap-5 w-fit mx-auto"
                            key={item.id}
                        >
                            <div
                                class="bg-custom-color1 rounded-lg hover:bg-white duration-300 transition-all w-28 aspect-square p-8 overflow-hidden"
                                dangerouslySetInnerHTML={item.icon}
                            />
                            <span class="font-bold text-lg text-center text-custom-color1 line-clamp-4 h-[82px]">
                                {item.title}
                            </span>
                        </div>
                    )
                }
            </div>
        </section>
    </>
}

export default Intro
