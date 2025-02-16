import {
    EighteenWheeler,
    Road,
} from "Svg"

const ProgressLine = ({
    assignedStages,
    progressPercent,
}) => {
    return <>
        {
            assignedStages?.length > 0 && <div class="w-fit mx-auto mt-10 hidden lg:block">
                <div class="flex flex-row relative ">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => <Road
                            class="w-14 aspect-square"
                            key={i.id}
                        />)
                    }
                    <EighteenWheeler
                        class="w-16 aspect-square absolute translate-x-1/2 inset-y-0 my-auto"
                        style={{ right: `${progressPercent}%` }}
                    />
                    {assignedStages?.length > 0 && <span
                        class="p-1 font-bold text-sm absolute -bottom-4 rounded bg-green-200"
                        style={{ right: `${progressPercent}%` }}
                    >
                        %{progressPercent}
                    </span>
                    }
                </div>

            </div>
        }
        {
            assignedStages?.length > 0 && <div class="w-fit mx-auto mt-10 lg:hidden">
                <div class="flex flex-row relative ">
                    {
                        [1, 2, 3, 4, 5].map(i => <Road
                            class="w-14 aspect-square"
                            key={i.id}
                        />)
                    }
                    <EighteenWheeler
                        class="w-16 aspect-square absolute translate-x-1/2 inset-y-0 my-auto"
                        style={{ right: `${progressPercent}%` }}
                    />
                    {assignedStages?.length > 0 && <span
                        class="p-1 font-bold text-sm absolute -bottom-4 rounded bg-green-200"
                        style={{ right: `${progressPercent}%` }}
                    >
                        %{progressPercent}
                    </span>
                    }
                </div>

            </div>
        }
    </>
}

export default ProgressLine
