import { Image } from "Base"

const Info = ({
    addressTitle,
    items,
    phoneTitle,
}) => {

    return <>
        {
            items?.map(item => <div
                class="bg-white border border-custom-color1 rounded-3xl px-4 pb-7 md:px-8 mt-4"
                key={item.id}
            >

                <h2 class="py-2 border-b-[1px] border-custom-color1 md:text-xl font-bold text-custom-color2">{item?.title}</h2>

                <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8 lg:gap-10 items-center mt-4 text-custom-color2">

                    <div class="col-span-1 px-4 sm:px-0">
                        <Image
                            alt={item?.title}
                            containerClass="w-24 sm:max-w-full sm:w-48 mx-auto"
                            src={item?.image}
                        />
                    </div>

                    <div class="col-span-1 sm:col-span-3">
                        <div class="flex flex-wrap gap-2 mb-4">
                            <p>{addressTitle}</p>
                            <p>{item?.address}</p>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <p>{phoneTitle}</p>
                            <p>{item?.phoneNum}</p>
                        </div>
                    </div>

                </div>
            </div>
            )
        }
    </>
}

export default Info
