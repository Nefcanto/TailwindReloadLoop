import { Chat } from "Questions"

const Heading = ({ title }) => {

    return <>

        <div class="max-w-7xl mx-auto px-5">
            <div class="w-full flex flex-wrap items-center gap-4 py-4 mb-4 border-b-2">
                <Chat class="w-6 aspect-square flex items-center justify-center fill-custom-color1" />
                <h1 class="w-[calc(100%-120px)] font-bold text-lg md:text-2xl">
                    {title}
                </h1>
            </div>
        </div>
    </>
}

export default Heading
