const Taxonomy = ({
    getUrl,
    hasItems,
    items,
    localePathPrefix,
    title,
}) => {

    return hasItems && <>
        <div class="group flex flex-row items-center gap-1.5">
            {
                title && <>
                    <p class="text-custom-color2">
                        <strong>
                            {title}
                        </strong>
                    </p>
                </>
            }
            <div class="flex flex-wrap gap-0.5">
                {
                    items?.map(item => <div
                        class={`after:content-[","] last:after:content-none pe-0.5`}
                        key={item.id}
                    >
                        <a
                            class="hover:text-custom-color4 transition-all"
                            href={getUrl(item?.slug, localePathPrefix)}
                        >
                            {item?.title}
                        </a>
                    </div>)
                }
            </div>
        </div>
    </>
}

export default Taxonomy
