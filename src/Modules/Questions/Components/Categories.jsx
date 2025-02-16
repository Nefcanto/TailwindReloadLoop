import { useCategoryUrl } from "Questions"

const Categories = ({
    categories,
    localePathPrefix,
    questionsTexts,
}) => {

    return <div class="lg:w-[30vw] xl:w-[20vw] border rounded-xl p-4 mb-4">
        <b class="block text-md pb-2 mb-4">
            {questionsTexts?.categories}
        </b>
        <div class="flex flex-col gap-4">
            {
                categories?.map(item => <>
                    <a
                        class="text-black hover:text-custom-color1 transition-all"
                        href={useCategoryUrl(item?.slug, localePathPrefix)}
                        key={item.id}
                    >
                        {item?.title}
                    </a>
                </>)
            }
        </div>
    </div>
}

export default Categories
