import {
    Section,
    useCategoryUrl,
} from "Blog"

const Categories = ({
    categories,
    localePathPrefix,
    blogStatics
}) => {

    return <Section title={blogStatics?.categoriesTitle || "Categories"}>
        {
            categories?.map(category => <a
                key={category.id}
                href={useCategoryUrl(category.slug, localePathPrefix)}
                class="flex gap-x-4 pb-4"
            >
                <p>{category.title}</p>
            </a>)
        }
    </Section>
}

export default Categories
