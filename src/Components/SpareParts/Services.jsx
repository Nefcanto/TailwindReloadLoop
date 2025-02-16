import { Title } from "Shared"
import { Left } from "Svg"

const Services = ({ sparePartsServices }) => {

    return <>
        <section class="w-full bg-custom-color1 p-10 mt-14">
            <Title
                class="after:h-[3px] after:mt-1 after:bg-black text-2xl"
                text={sparePartsServices.title}
            />
            <div class="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 md:gap-8 mt-8 w-full md:max-w-7xl md:mx-auto">
                {
                    sparePartsServices?.items?.map(item => <div
                        class="flex flex-col justify-center items-center bg-white p-4 rounded gap-5 w-full hover:scale-110 duration-300 transition-all"
                        key={item?.id}
                    >
                        <div
                            class="fill-custom-color1 w-28 aspect-square p-7"
                            dangerouslySetInnerHTML={item.icon}
                        />
                        <span class="text-md font-black -mt-4">{item?.title}</span>
                        <p class="text-center">{item?.description}</p>
                        <a
                            class="border-2 border-custom-color1 p-2 rounded-lg mt-2"
                            href="">
                            <div class="flex flex-row justify-between gap-5">
                                <span class="text-md font-bold text-custom-color1 mx-auto">{item?.buttonTitle}</span>
                                <Left class="w-6 h-6 fill-custom-color1" />
                            </div>
                        </a>
                    </div>)
                }
            </div>
        </section>
    </>
}

export default Services
