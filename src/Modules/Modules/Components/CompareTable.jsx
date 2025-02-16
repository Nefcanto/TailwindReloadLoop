import {
    Check,
    Close,
} from "Base"

const CompareTable = ({ entitiesToBeCompared }) => {

    return <div class="overflow-x-auto">

        <div class="block w-full p-4 rounded-xs mt-20 min-w-[600px]">
            <div class={`flex items-center w-full border text-center h-full`}>
                {
                    Object.entries(entitiesToBeCompared[0])?.map(([key, value]) => <>
                        {typeof value === "object" ?
                            <div class="flex-1 border-s first:border-0 flex flex-col">
                                <p class="mx-4 my-2 line-clamp-1 border-b">{key}</p>
                                <div class="flex items-center w-full justify-around">
                                    {Object.keys(value)?.map(related => <p
                                        class="text-xs py-0.5"
                                        key={related?.id}
                                    >{related}</p>)}
                                </div>
                            </div>
                            :
                            <div class="flex-1 flex self-stretch items-center justify-center border-s first:border-0 ">
                                <p class="mx-4 my-2 line-clamp-1 self-stretch w-full flex items-center justify-center text-sm">{key}</p>
                            </div>
                        }
                    </>
                    )
                }
            </div>
            {
                entitiesToBeCompared.map(row => <>
                    <div class="w-full flex items-center">
                        {
                            Object.values(row).map(cell => <>
                                {typeof cell === "object" ?
                                    <div class="flex-1 border border-t-0 self-stretch flex items-center ">
                                        <p class="flex justify-around my-2 text-sm w-full">
                                            {
                                                // Object.values(cell)?.map(relatedItem => <span class="text-xs">{relatedItem}</span>)
                                            }
                                        </p>
                                    </div>
                                    :
                                    <div class="flex-1 text-start border-s border-b self-stretch flex items-center">
                                        <p class="mx-4 my-2 text-sm px-2 w-full">
                                            {typeof cell === "boolean" ? <span>
                                                {
                                                    cell ?
                                                        <Check class="w-5" /> :
                                                        <Close class="w-5" />
                                                }
                                            </span> :
                                                cell
                                            }
                                        </p>
                                    </div>
                                }
                            </>
                            )
                        }
                    </div>
                </>
                )
            }
        </div>
    </div>
}

export default CompareTable
