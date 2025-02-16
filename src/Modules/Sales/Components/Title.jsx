import { merge } from "Base"

const Title = ({
    class: internalClass,
    isPlainTitle,
    link,
    title,
    titleClass,
    viewAllTitle,
}) => {

    const TitleTag = isPlainTitle ? "p" : "h2"

    return <>
        <div class={merge("w-full flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 pb-5", internalClass)}>
            {
                title && <TitleTag class={merge("w-fit text-xl 2xl:text-2xl text-custom-color22 select-none px-5 lg:ps-0 leading-8 lg:pe-3 border-b-2 border-custom-color1 z-10", titleClass)}>
                    <strong>
                        {title}
                    </strong>
                </TitleTag>
            }
            {
                viewAllTitle && link && <div class="pe-3 lg:pe-0 md:ms-auto">
                    <p class="relative w-fit text-sm">
                        <a
                            aria-label={title ?? viewAllTitle}
                            class={`text-custom-color22 after:bg-custom-color1/60 hover:text-custom-color21 block select-none px-1 after:absolute after:bottom-[1px] after:end-0 after:start-0 after:mx-auto after:h-0.5 after:w-0 after:transition-all after:duration-700 after:content-[""] hover:after:w-full focus:outline-none transition-all`}
                            href={link}
                        >
                            {viewAllTitle}
                        </a>
                    </p>
                </div>
            }
        </div>
    </>
}

export default Title
