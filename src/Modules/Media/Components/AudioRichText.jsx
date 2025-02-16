const Audio = ({ url }) => {
    return <audio
        class="block w-full max-w-md mx-auto my-6"
        src={url}
        controls
    >
    </audio>
}

export default Audio
