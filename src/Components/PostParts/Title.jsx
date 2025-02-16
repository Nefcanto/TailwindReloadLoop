import {
    Image,
    LocalizedDate,
} from "Base"

const Title = ({ post }) => {

    return <>
        <section class="relative text-center mt-8">
            <h1 class="font-black pb-4 text-xl md:text-3xl mx-auto relative after:absolute after:bottom-0 after:w-14 after after:h-1 after:bg-custom-color1 after:mx-auto after:inset-x-0 after:rounded-full"
            >{post.title}</h1>
            <span class="flex items-center justify-center my-6">
                <LocalizedDate utcDate={post.utcDate} />
            </span>
            <Image
                alt={post.title}
                containerClass="max-w-full w-1/1 aspect-[3/2]"
                src={post.relatedItems.imageUrl}
            />
        </section>
    </>
}

export default Title
