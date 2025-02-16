const CancelButton = ({
    onClick$: _onClick$,
    title,
}) => {

    return <button
        class="w-fit my-2 text-red-900 py-1 px-4 text-sm hover:bg-red-200 font-bold rounded-md duration-300"
        onClick$={_onClick$}
    >
        <span>
            {title}
        </span>

    </button>
}

export default CancelButton
