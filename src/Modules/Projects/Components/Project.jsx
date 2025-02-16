import { Image } from "Base"
import {
    SvgLocation,
    useListingUrl,
} from "Projects"

const Project = ({
    category,
    cityDivisionName,
    cityDivisionSlug,
    configs,
    image,
    localePathPrefix,
    title,
}) => {

    return <div class="xs:max-w-[320px] sm:max-w-[400px] mx-auto border rounded-xl p-4">
        <Image
            src={image}
            alt={title}
            containerClass="w-full aspect-[3/2] rounded-xl overflow-hidden"
        />
        <div class="flex justify-between items-center gap-2 mt-4 mb-3 text-custom-color2">
            {
                category &&
                <a
                    class="bg-custom-color3 rounded-sm px-1.5 py-1 text-xs"
                    href={useListingUrl({
                        category: category.slug,
                        cityDivision: cityDivisionSlug,
                        localePathPrefix: localePathPrefix
                    })}
                >
                    {category?.title}
                </a>
            }
            {
                cityDivisionName &&
                <a
                    class="flex gap-1 bg-custom-color3 rounded-sm px-1.5 py-1 text-xs"
                    href={useListingUrl({
                        cityDivision: cityDivisionSlug,
                        localePathPrefix: localePathPrefix
                    })}
                >
                    <SvgLocation class="w-4 aspect-square fill-custom-color2" />
                    {cityDivisionName}
                </a>
            }
        </div>
        <h2 class="line-clamp-2 h-[48px] font-bold text-black/80">{title}</h2>
        {
            configs && configs.length > 0 &&
            <div class="flex flex-col gap-1 h-[92px] text-sm text-custom-color2/80 mt-4">
                {
                    configs?.map(item => <>
                        {
                            item.currentValue &&
                            <div
                                class="flex gap-1"
                                key={item.id}
                            >
                                <span>{item.configurationConfigItemName}</span>
                                <span>:</span>
                                <span>{item.currentValue}</span>
                            </div>
                        }
                    </>)
                }
            </div>
        }
    </div>
}

export default Project
