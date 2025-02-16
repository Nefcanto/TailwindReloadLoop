const OpenInFull = ({
    class: _class,
    onClick$: _onClick$,
}) => {
    return <svg
        viewBox="0 -960 960 960"
        class={_class || ""}
        onClick$={_onClick$ || null}
    >
        <path d="M120-120v-300h60v198l558-558H540v-60h300v300h-60v-198L222-180h198v60H120Z" />
    </svg>
}

export default OpenInFull

