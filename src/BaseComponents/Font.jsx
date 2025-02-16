import { component$ } from "@builder.io/qwik"

const Font = component$(({
    name,
    roboto,
}) => {

    if (roboto) {
        return <link
            href={`/Fonts/Common/Roboto/Font.css`}
            type="text/css"
            rel="stylesheet"
        />
    }

    return <>
        <link
            href={`/Fonts/Persian/${name}/Font.css`}
            type="text/css"
            rel="stylesheet"
        />
    </>
})

export default Font
