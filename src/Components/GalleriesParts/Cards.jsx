import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import { Image } from "Base"
import { Slider } from "GalleriesParts"

const GalleryCards = component$(({ galleries }) => {

    const galleryIsOpen = useSignal(false)

    return <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-14">
        {
            galleries.data.map(item => <>
                <div
                    class="border border-2 border-gray-200 p-4 rounded-xl group cursor-pointer"
                    dir="rtl"
                    key={item.id}
                    onClick$={() => galleryIsOpen.value = true}
                >
                    <div>
                        <Image
                            containerClass="max-w-full w-1/1 aspect-[3/2] rounded-xl overflow-hidden"
                            imageClass="object-cover group-hover:scale-110 duration-500 translate-all"
                            src={item.relatedItems.imageUrl}
                        />
                    </div>
                    <div class="my-6 group-hover:text-custom-color1 duration-300 translate-all line-clamp-1">
                        <h1 class="font-black text-lg">{item.title}</h1>
                    </div>

                    <p class="line-clamp-3">{item.description}</p>
                </div>
                <Slider
                    gallery={item}
                    galleryIsOpen={galleryIsOpen}
                />
            </>
            )
        }
    </div>
})

export default GalleryCards
