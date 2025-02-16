const NaturalPersonInputs = ({
    profileStatics,
    model
}) => {
    return <>
        <label>
            {profileStatics?.firstName}
        </label>
        <input
            class="bg-gray-200 rounded-lg p-2 w-full"
            type="text"
            onInput$={(e) => model.value.firstName = e.target.value}
        >
        </input>
        <label>
            {profileStatics?.lastName}
        </label>
        <input
            class="bg-gray-200 rounded-lg p-2 w-full"
            type="text"
            onInput$={(e) => model.value.lastName = e.target.value}
        >
        </input>
    </>
}

export default NaturalPersonInputs
