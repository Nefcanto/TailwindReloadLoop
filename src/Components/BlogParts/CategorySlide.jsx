import { component$ } from "@builder.io/qwik"
import { Image } from "Base"
import { useCategoryUrl } from "Blog"
import { Left } from "Svg"

const CategorySlide = component$(({
    category,
    localePathPrefix,
}) => {
    return <a
        class="max-w-full w-[250px] group block w-full aspect-square text-center bg-white rounded-lg mb-16 mx-auto flex flex-col justify-between px-2 py-6 gap-2 mt-5 lg:hover:border-x-4 lg:hover:border-b-4 lg:hover:border-b-custom-color1/75 lg:hover:border-x-custom-color1/75 lg:hover:border-scale-75 lg:hover:scale-110 transition-all duration-300 text-custom-color1/75"
        href={useCategoryUrl(category.slug, localePathPrefix)}
    >
        <Image
            alt={category.title}
            containerClass="w-10 aspect-square mx-auto rounded-lg block overflow-hidden text-black/80"
            src={category.relatedItems.imageUrl}
        />
        <p class="flex items-center justify-center text-black">
            <strong class="text-sm md:text-lg line-clamp-2">
                {category.title}
            </strong>
        </p>
        <div class="w-fit transition-all duration-200 rounded-full mx-auto border-2 border-custom-color1 text-black">
            <Left class="block w-6 h-6 fill-black group-hover:w-16 transition-all duration-200 ltr:rotate-180" />
        </div>
    </a>
})

export default CategorySlide
