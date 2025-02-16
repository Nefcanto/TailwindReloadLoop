const GoogleTag = ({ identifier }) => {
    if (!identifier || !identifier.startsWith("G-")) {
        throw "Google tag id is not correct;"
    }
    return <>
        <script
            src={`https://www.googletagmanager.com/gtag/js?id=${identifier}`}
            strategy="afterInteractive"
            // type="text/partytown"
        ></script>
        <script
            id="google-analytics"
            strategy="afterInteractive"
            // type="text/partytown"
        >
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag("js", new Date());

          gtag("config", "${identifier}");
        `}
        </script>
    </>
}

export default GoogleTag
