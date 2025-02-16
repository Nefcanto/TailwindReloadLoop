const Video = ({
    poster,
    url,
}) => {
    return <video
        src={url}
        poster={poster}
        class="w-full"
        controls
    >
    </video>
}

export default Video
