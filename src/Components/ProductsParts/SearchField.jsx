import { Progress } from "Shared"
import { Magnifying } from "Svg"

const SearchField = ({
    searchInputBehavior,
    searchLabel,
    systemIsSearching,
    translations,
}) => {
    return <>
        <div class="group w-full h-10 flex items-center overflow-hidden rounded bg-custom-color21 flex w-full">
            <div class="relative z-10 flex h-full w-full flex-row items-center rounded">
                <input
                    {...searchInputBehavior}
                    aria-label={translations?.search || searchLabel}
                    class="z-10 w-full h-full outline-hidden text-sm ps-2.5"
                    placeholder={translations?.search || searchLabel}
                    type="text"
                />
                <div class="w-fit h-full flex items-center px-1.5 ms-auto bg-custom-color31 cursor-pointer" >
                    {
                        systemIsSearching
                            ?
                            <Progress class="z-10" />
                            :
                            <Magnifying class="w-[22px] aspect-square text-custom-color21 group-focus-within:text-custom-color21/80 group-focus-within:rotate-[360deg] group-focus-within:scale-110 duration-700" />
                    }
                </div>
            </div>
        </div>
    </>
}

export default SearchField
