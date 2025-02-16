import {
    Section,
    useTagUrl,
} from "Blog"

const Tags = ({
    blogStatics,
    localePathPrefix,
    tags,
}) => {

    return <Section title={blogStatics?.tagsTitle || "Tags"}>
        {
            tags?.map(tag => <a
                key={tag.id}
                href={useTagUrl(tag.slug, localePathPrefix)}
                class="flex gap-x-4 pb-4"
            >
                <p>{tag.title}</p>
            </a>)
        }
    </Section>
}

export default Tags
