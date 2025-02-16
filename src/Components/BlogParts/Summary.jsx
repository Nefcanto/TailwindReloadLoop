import { Image } from "Base"
import { Paragraph } from "Shared"
import {
    component$,
    useVisibleTask$,
} from "@builder.io/qwik"

const Summary = component$(({ blogSummary }) => {

    useVisibleTask$(() => {
        const blogIntro = document.getElementById("blog-intro")
        blogIntro.style.setProperty("transform", "translateX(0)", "important")
    }, {
        strategy: "intersection-observer"
    })

    return <>
        <section class="lg:flex lg:flex-row lg:justify-between px-5 mt-14 lg:gap-8 lg:w-full xl:max-w-7xl xl:mx-auto overflow-hidden">
            <div
                id="blog-intro"
                class="translate-x-[2000px] transition-all duration-[1500ms] ease-in-out flex flex-col justify-start items-start lg:w-4/5 m-auto"
            >
                <h1 class="mb-2 text-xl font-bold">{blogSummary.title}</h1>
                <Paragraph
                    text={blogSummary.description}
                    class="text-base text-start"
                />
            </div>
            <Image
                containerClass="max-w-full w-1/1 aspect-[3/1]"
                imageClass="object-fit"
                src={blogSummary.image}
            />
        </section>
    </>
})

export default Summary
