import { Add } from "Forums"

const Header = ({
    boardTitle,
    newTopic,
    title,
}) => {

    return <>
        <div class="bg-gray-200 py-10 md:py-16">
            <div class="w-full lg:container mx-auto px-5 flex flex-col sm:flex-row flex-wrap gap-2 items-center justify-between">

                <div class="flex flex-wrap gap-2 items-center">
                    <p class="text-custom-color1">{boardTitle}</p>
                    <p class="text-xl md:text-2xl">{title}</p>
                </div>

                <a
                    class="border border-custom-color1 rounded-2xl flex gap-4 text-black px-4 py-2"
                    href="/"
                >
                    <Add class="w-4 aspect-square fill-custom-color1" />
                    <p>{newTopic}</p>
                </a>

            </div>
        </div>
    </>
}

export default Header
