import { component$ } from "@builder.io/qwik"
import {
    PageHeader,
    Pagination,
} from "Shared"
import { HeaderOffset } from "Layout"
import {
    Categories,
    Posts,
    Summary,
} from "BlogParts"

const Layout = component$(({
    blogCategories,
    blogHeader,
    blogPostHeader,
    blogPostIconTitle,
    blogSummary,
    categories,
    category,
    localePathPrefix,
    posts,
    tag,
}) => {

    return <>
        <HeaderOffset />
        <div class="text-center text-3xl mt-20">
            <h1 class="font-bold">{blogHeader.title}</h1>
            {category && <strong class="text-base font-normal">{category.title}</strong>}
            {tag && <strong class="text-base font-normal">{tag.title}</strong>}
        </div>
        <Categories
            statics={blogCategories}
            categories={categories}
            localePathPrefix={localePathPrefix}
        />
        <Summary blogSummary={blogSummary} />
        <PageHeader {...blogPostHeader} />
        <Posts
            posts={posts}
            iconTitle={blogPostIconTitle}
            localePathPrefix={localePathPrefix}
        />
        <Pagination metadata={posts.metadata} />
    </>

})

export default Layout
