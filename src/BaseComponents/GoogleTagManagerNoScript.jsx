const GoogleTagManagerNoScript = ({ googleTagManagerId }) => {

    return <>
        {
            googleTagManagerId &&
            <noscript>
                <iframe
                    height="0"
                    src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId?.trim()}`}
                    style={{ display: "none", visibility: "hidden" }}
                    width="0"
                >
                </iframe>
            </noscript>
        }
    </>
}

export default GoogleTagManagerNoScript
