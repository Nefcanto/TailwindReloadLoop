const HorizontalMenu = ({
    menu,
    menuItems,
}) => {

    return <>
        <div class="flex flex-row justify-center items-center gap-3">
            {
                menuItems?.map(item => <div key={item.id}>
                    <a
                        href={item.url}
                        class="transition-all duration-200 hover:scale-110 hover:translate-x-[-1rem] cursor-pointer w-full"
                    >
                        <span class="w-full text-sm font-bold bg-right-bottom bg-gradient-to-r from-black to-black bg-[length:0%_0px] bg-no-repeat hover:bg-[length:100%_2px] hover:text-custom-color1 hover:bg-right-bottom transition-all duration-500">{item.title}</span>
                    </a>
                </div>)
            }
        </div>
    </>
}

export default HorizontalMenu
