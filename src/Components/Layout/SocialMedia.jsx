const SocialMedia = ({
    items,
    title,
}) => {

    return <section class="mt-10">
        <div class="flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-5 sm:items-center bg-custom-color1 px-5 py-10 text-center sm:text-start">
            <p class="text-md">{title}</p>
            <div class="flex gap-1 justify-center items-center">
                {
                    items?.filter(item => item?.isActive === "True").map(item => <a
                        key={item.key}
                        href={item.slug}
                        class="hover:animate-wave w-8 h-8 border-2 border-black rounded-full [&>svg]:h-5 [&>svg]:mx-auto [&>svg]:mt-1"
                        dangerouslySetInnerHTML={item.icon}
                    >
                    </a>)
                }
            </div>
        </div>
    </section>
}

export default SocialMedia
