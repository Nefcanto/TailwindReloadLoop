import { RichText } from "Shared"

const Qa = ({
    content,
    title,
}) => {

    return <div class="mt-10">
        <h1 class="font-bold md:text-xl mb-4">
            {title}
        </h1>
        <RichText content={content} />
    </div>
}

export default Qa
