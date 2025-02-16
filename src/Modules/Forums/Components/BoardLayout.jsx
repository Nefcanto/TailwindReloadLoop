import {
    Board,
    Header,
    SideBox,
} from "Forums"

const BoardLayout = ({
    board,
    discussions,
    discussionTexts,
    latestDiscussions,
    localePathPrefix,
    mostViewedDiscussions,
}) => {

    return <>
        <Header
            {...discussionTexts}
            title={board?.title}
        />
        <div class="w-full lg:container mx-auto p-5 flex flex-col xl:flex-row gap-6">
            <article class="w-full xl:w-[calc(100%-400px)] xl:mb-10">
                <Board
                    {...discussionTexts}
                    items={discussions?.data}
                    localePathPrefix={localePathPrefix}
                    title={board?.title}
                />
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

        </div >
    </>
}

export default BoardLayout
