const Versions = () => {
    const settings = {}
    return <div id="versions" style={{ display: "none" }}>
        <div>{`Qwik: ${settings?.Qwik}`}</div>
        <div>{`Qwik City: ${settings?.QwikCity}`}</div>
        <div>{`Tailwind: ${settings?.Tailwind}`}</div>
    </div>
}

export default Versions
