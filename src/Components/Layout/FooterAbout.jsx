const FooterAbout = ({
    description,
    title,
}) => {

    return <div class="sm:col-span-2 lg:col-span-1">
        <p class={title}>
            {title}
        </p>
        <p class="text-white mt-5">{description}</p>
    </div>
}

export default FooterAbout
