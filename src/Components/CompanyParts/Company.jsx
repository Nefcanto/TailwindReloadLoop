import { Image } from "Base"

const Company = ({
    details,
    members
}) => {

    return <>
        <section class="p-6 mt-8">
            <h1 class="text-2xl md:text-4xl font-black text-center">{details.displayName}</h1>
            <Image
                containerClass="mx-auto inset-x-0 p-6 max-w-full w-1/1 h-[15rem] md:w-[702px] md:h-[25rem] 2xl:w-[900px] 2xl:h-[40rem]"
                src={details.relatedItems.imageUrl}
            />
            <div class="flex flex-col md:flex-row justify-start items-start gap-10 mt-6 max-w-3xl lg:max-w-4xl mx-auto">
                <div class="flex-1 flex gap-3">
                    <div class="w-16 h-16 md:w-24 md:h-24 border-2 border-custom-color1 rounded-full overflow-hidden z-10">
                        <Image
                            containerClass="w-fit z-20"
                            src={details.relatedItems.ceo.imageUrl}
                        />
                    </div>
                    <span class="w-full h-full m-auto text-lg md:text-xl font-extrabold">{members.ceo}: {details.relatedItems.ceo.contactsPersonDisplayName}</span>
                </div>
                <span class="text-end flex-1 md:m-auto text-lg md:text-xl font-extrabold">{members.personnelCount}: {details.personnelCount} </span>
            </div>
        </section>
    </>
}

export default Company
