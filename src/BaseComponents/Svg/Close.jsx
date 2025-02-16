const Close = ({
    class: _class,
    onClick$: _onClick$,
}) => {
    return <svg
        class={_class || ""}
        onClick$={_onClick$ || ""}
        viewBox="0 -960 960 960"
    >
        <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
    </svg>
}

export default Close
