import {
    Categories,
    Content,
    Related,
    Tags,
    Title,
} from "PostParts"
import {
    AddComment,
    CommentsList,
} from "Shared"

const Layout = ({
    blogTexts,
    comments,
    commentsTexts,
    content,
    fields,
    form,
    localePathPrefix,
    post,
}) => {

    return <div class="max-w-5xl mx-auto px-4 pt-20">
        <Categories
            categories={post.relatedItems.categories}
            localePathPrefix={localePathPrefix}
        />
        <Title post={post} />
        <Content
            content={content}
            items={post}
        />
        <Tags
            localePathPrefix={localePathPrefix}
            tagItems={post?.relatedItems?.tags}
            title={blogTexts?.tagTitle}
        />
        <CommentsList
            {...comments}
            description={commentsTexts?.commentsListDescription}
        />
        <AddComment
            {...fields}
            {...form}
            entity={post}
        />
    </div>
}

export default Layout
