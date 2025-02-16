import { Image } from "Base"
import { Title } from "Shared"

const SpecialServicesCard = ({ services }) => {

    return <>
        <section class="p-6 mt-20 max-w-screen-7xl mx-auto">
            <Title
                text={services.title}
                class="px-4 mb-6"
            />
            <div class="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 mt-5 mx-auto">
                {
                    services?.items?.map(item => <a
                        href={item?.slug}
                        class="block relative w-full aspect-[4/3] sm:aspect-[3/1] md:aspect-[4/3] lg:aspect-[3/1] after:absolute after:w-full after:h-full after:start-0 after:top-0 after:bg-gradient-to-t from-black/70 to-transparent after:z-10 group"
                        key={item.id}
                    >
                        <div class="absolute inset-x-0 mx-auto top-[35%] min-w-[200px] z-20 gap-5 text-center flex flex-col">
                            <strong class="text-white font-black text-xl">{item?.title}</strong>
                            <p class="text-white font-extrabold text-lg line-clamp-2">{item?.description}</p>
                        </div>

                        <Image
                            containerClass="max-w-full w-1/1 h-full group-hover:brightness-[65%] transition-all duration-200"
                            src={item.image}
                            alt={item.alt}
                        />
                    </a>
                    )
                }
            </div>
        </section>
    </>
}

export default SpecialServicesCard
