import { SearchField } from "ProductsParts"

const Search = ({
    productsStatics,
    ...rest
}) => {

    return <>
        <div class="w-full xs:w-60 sm:w-xs lg:w-sm mx-auto flex flex-col justify-center bg-custom-color23 mt-8 sm:mt-12 lg:mt-auto my-5 py-4 lg:py-6 px-2.5 lg:px-5 rounded">
            <p class="pb-0.5 mb-2.5 lg:mb-4 pb-2 border-b-2 border-custom-color22/50 text-custom-color2">
                {productsStatics?.searchTitle}
            </p>
            <SearchField
                {...rest}
                searchLabel={productsStatics?.searchLabel}
            />
        </div>
    </>
}

export default Search
