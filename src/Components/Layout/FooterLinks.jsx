const FooterLinks = ({
    title,
    items,
}) => {

    return <div class="px-4">
        <strong class={"text-lg text-white font-bold text-start after:content-[\"\"] after:block after:mx-start after:mt-3 after:w-16 after:h-[5px] after:bg-custom-color1 after:rounded-lg"}>{title}</strong>
        <div class="flex flex-col gap-3 mt-4">
            {
                items?.map(item => <a
                    href={item.link}
                    key={item.id}
                    class="text-md text-white hover:text-custom-color1 duration-200 transition-all"
                >
                    {item.text}
                </a>)
            }
        </div>
    </div>
}

export default FooterLinks
