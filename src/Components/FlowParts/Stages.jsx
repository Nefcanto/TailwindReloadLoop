import { Check } from "Svg"

const Stages = ({
    assignedStages,
    searchStatics,
}) => {
    return assignedStages?.length > 0 && <ul>
        <li class="p-2 font-bold my-2 bg-green-200 rounded">
            {searchStatics?.steps}
        </li>
        {
            assignedStages?.map(stage => {
                return <li
                    class="flex gap-2"
                    key={stage.id}
                >
                    <Check class="fill-green-900" />
                    <span class="font-semibold">
                        {stage.title}
                    </span>
                </li>
            })
        }
        <a
            class="mt-10"
            href={searchStatics?.readMoreButtonLink}
        >
            <li class="p-2 font-bold my-2 bg-green-200 rounded">
                {searchStatics?.readMoreButton}
            </li>
        </a>
    </ul>
}

export default Stages
