import { Pagination } from "Base"
import {
    Categories,
    Latest,
    MostViewed,
    Popular,
    Post,
    Tags,
} from "Blog"

const Layout = ({
    blogStatics,
    categories,
    currentLocale,
    latestPosts,
    localePathPrefix,
    mostViewedPosts,
    popularPosts,
    posts,
    seo,
    tags,
}) => {

    const {
        data,
        metadata,
    } = posts

    return <div class="blog grid px-4 py-20 sm:px-16 md:px-8 lg:px-10 xl:px-20 lg:grid-cols-3 lg:gap-8 max-w-screen-xl xl:mx-auto">
        <main class="lg:col-span-2">
            <div class="grid gap-8 md:grid-cols-2">
                {
                    data?.map(post => <Post
                        key={post.id}
                        post={post}
                        localePathPrefix={localePathPrefix}
                        currentLocale={currentLocale}
                        readMoreText={blogStatics?.postCardReadMore}
                    />)
                }
            </div>
            <div>
                <Pagination
                    activeClass
                    container
                    count
                    ellipses
                    first
                    items="p-2 border-custom-color1"
                    last
                    metadata={metadata}
                    next="p-2 border-2 border-custom-color1 rounded-full"
                    previous="border-2 border-custom-color1 rounded-full"
                />
            </div>
        </main>
        <aside>
            <Categories
                blogStatics={blogStatics}
                categories={categories}
                localePathPrefix={localePathPrefix}
            />
            <Tags
                blogStatics={blogStatics}
                localePathPrefix={localePathPrefix}
                tags={tags}
            />
            <Latest
                blogStatics={blogStatics}
                latestPosts={latestPosts}
                localePathPrefix={localePathPrefix}
                currentLocale={currentLocale}
            />
            {/* <Popular popularPosts={popularPosts} /> */}
            {/* <MostViewed mostViewedPosts={mostViewedPosts} /> */}
        </aside>
    </div>
}

export default Layout
