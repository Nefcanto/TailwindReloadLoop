import {
    HorizontalForums,
    SideBox,
    VerticalForum,
} from "Forums"

const ForumsLayout = ({
    discussionTexts,
    forums,
    latestDiscussions,
    localePathPrefix,
    mostViewedDiscussions,
    popularDiscussions,
}) => {

    return <div>
        <HorizontalForums
            {...discussionTexts}
            items={forums?.data}
            localePathPrefix={localePathPrefix}
        />

        <div class="w-full lg:container mx-auto p-5 flex flex-col xl:flex-row gap-6">

            <article class="w-full xl:w-[calc(100%-400px)] xl:mb-10">
                <VerticalForum
                    {...discussionTexts}
                    items={forums?.data}
                    localePathPrefix={localePathPrefix}
                />
            </article>

            <aside class="w-full xl:w-[350px] xl:mb-10">
                <SideBox
                    items={latestDiscussions}
                    localePathPrefix={localePathPrefix}
                    title={discussionTexts?.newDiscussions}
                />
                <SideBox
                    items={mostViewedDiscussions}
                    localePathPrefix={localePathPrefix}
                    title={discussionTexts?.updatedDiscussions}
                />
            </aside>
        </div>
    </div>
}

export default ForumsLayout
