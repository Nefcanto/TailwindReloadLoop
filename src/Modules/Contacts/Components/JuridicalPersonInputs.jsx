const JuridicalPersonInputs = ({
    profileStatics,
    model
}) => {

    return <>
        <label>
            {profileStatics?.name}
        </label>
        <input
            class="bg-gray-200 rounded-lg p-2 w-full"
            type="text"
            onInput$={(e) => model.value.name = e.target.value}
        >
        </input>
    </>
}

export default JuridicalPersonInputs
