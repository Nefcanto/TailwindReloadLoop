import { useCategoryUrl } from "Blog"

const Categories = ({
    categories,
    localePathPrefix,
}) => {

    return <>
        <section class="flex flex-wrap">
            {
                categories?.map(category => <a
                    href={useCategoryUrl(category.slug, localePathPrefix)}
                    class="rounded-lg border-custom-color1 border-2 bg-custom-color1 hover:bg-white duration-200 transition-all whitespace-nowrap py-0.5 m-1 px-3 w-fit"
                    key={category.id}
                >
                    {category.title}
                </a>
                )
            }
        </section>
    </>
}

export default Categories
