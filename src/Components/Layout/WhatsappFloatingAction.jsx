import { Whatsapp } from "Svg"

const WhatsappFloatingAction = ({ floatingActions }) => {

    return <a
        class="group fixed bottom-4 end-4 md:bottom-16 md:end-16 z-40 bg-custom-color1 hover:bg-[#25D366] rounded-full p-3 transition-all duration-500 hover:scale-110"
        href={floatingActions?.whatsappLink}
    >
        <span class="absolute top-0 start-0 w-full h-full rounded-full animate-ping -z-10 bg-custom-color1 group-hover:bg-[#25D366] transition-all duration-500" />
        <Whatsapp class="w-6 md:w-10 aspect-square stroke-1 fill-custom-color2 group-hover:fill-white transition-all duration-500" />
    </a>
}

export default WhatsappFloatingAction
