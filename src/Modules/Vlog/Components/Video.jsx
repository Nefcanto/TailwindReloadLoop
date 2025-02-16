const Video = ({ url }) => {

    return <>
        <video
            controls
            src={url}
            type="video/mp4"
            class="w-full md:w-2/3 mx-auto aspect-video bg-black"
        >
        </video>
    </>
}

export default Video
