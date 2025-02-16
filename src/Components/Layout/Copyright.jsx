import { Employee } from "Svg"

const Copyright = ({ items }) => {

    return <div class="w-full border-t-2 border-white">
        <div class="p-4 flex flex-row mx-auto w-fit max-w-sm md:max-w-full">
            {
                items.map(item => <a
                    class={"text-sm text-white last:after:content-[\"\"] p-1"}
                    href={item.link}
                    key={item.key}
                >
                    <div class="flex flex-row justify-center items-center gap-3 ">
                        <Employee class="hover:animate-wave w-8 h-8 fill-custom-color1" />
                        <p class="text-sm text-white hover:text-custom-color1 duration-200 transition-all">{item.text}</p>
                        <p class="text-sm text-white hover:text-custom-color1 duration-200 transition-all">{item.phoneNumber}</p>
                    </div>
                </a>)
            }
        </div>
    </div>
}

export default Copyright
