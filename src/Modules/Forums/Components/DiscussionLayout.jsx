import {
    Discussion,
    DiscussionPosts,
    NewComment,
    SideBox,
} from "Forums"

const DiscussionLayout = ({
    content,
    currentLocale,
    discussion,
    discussionPosts,
    discussionTexts,
    latestDiscussions,
    localePathPrefix,
    mostViewedDiscussions,
    popularDiscussions,
}) => {

    return <div class="w-full lg:container mx-auto p-5 flex flex-col xl:flex-row gap-6">
        <article class="w-full xl:w-[calc(100%-400px)] xl:mb-10">
            <Discussion
                {...discussion}
                {...discussionTexts}
                content={content}
                currentLocale={currentLocale}
            />
            {
                discussionPosts?.metadata.hasData &&
                <DiscussionPosts
                    {...discussionTexts}
                    currentLocale={currentLocale}
                    items={discussionPosts?.data}
                />
            }
            <NewComment {...discussionTexts} />
        </article>
        <aside class="w-full xl:w-[350px] xl:mb-10">
            <SideBox
                localePathPrefix={localePathPrefix}
                title={discussionTexts?.newDiscussions}
                items={latestDiscussions}
            />
            <SideBox
                localePathPrefix={localePathPrefix}
                title={discussionTexts?.updatedDiscussions}
                items={mostViewedDiscussions}
            />
        </aside>
    </div>
}

export default DiscussionLayout
