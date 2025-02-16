import {
    merge,
    Pagination as BasePagination,
} from "Base"

const Pagination = ({
    metadata,
    containerClass,
}) => {

    const navButtonClass = "w-10 aspect-square p-1 sm:p-2 bg-custom-color24 rounded-full"

    return <BasePagination
        activeClass="bg-custom-color1 border-custom-color1"
        container={merge("flex flex-wrap gap-2 max-w-7xl mx-auto px-6 text-custom-color2 mt-3 md:mt-5", containerClass)}
        ellipses
        first={navButtonClass}
        items="flex items-center justify-center w-8 sm:w-10 aspect-square bg-custom-color24/50 border-2 border-custom-color24 hover:border-custom-color1 rounded-full text-xs sm:text-base transition-all"
        last={navButtonClass}
        metadata={metadata}
        next={navButtonClass}
        previous={navButtonClass}
    />
}

export default Pagination
