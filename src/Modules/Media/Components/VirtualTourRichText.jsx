const VirtualTour = ({
    title,
    url,
}) => {
    return <iframe
        class="my-8 w-full h-[500px] lg:h-[640px]"
        loading="lazy"
        src={url}
        title={title}
    >
    </iframe>
}

export default VirtualTour
