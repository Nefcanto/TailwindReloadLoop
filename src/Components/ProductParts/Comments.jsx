import { LocalizedDate } from "Base"
import { Person } from "Svg"

const Comments = ({
    data,
    description,
    metadata,
}) => {

    return <>
        <div class="flex flex-col gap-4 mt-10 md:mt-12">
            {/* <div class="text-custom-color22 flex flex-wrap gap-2">
                <p>{metadata?.totalCount}</p>
                <p>{description}</p>
            </div> */}
            {
                data?.map(item => <>
                    <div
                        class="bg-gray-100 p-5 rounded-md"
                        key={item.id}
                    >
                        <div class="flex items-center gap-3 mb-2">
                            <Person class="w-10 md:w-12 p-2 aspect-square fill-custom-color1 rounded-full" />
                            <p class="font-bold">{item?.name}</p>
                        </div>
                        {/* <div class="text-custom-color2">
                            <LocalizedDate
                                utcDate={item?.utcDate}
                                locale="fa"
                            />
                        </div> */}
                        <p class="ms-12">
                            {item?.body}
                        </p>
                    </div>
                </>)
            }

        </div>
    </>
}

export default Comments
