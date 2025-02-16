const MobileSecondSubMenu = ({
    isOpenSecondSubMenu,
    items,
}) => {

    return <ul class={`${isOpenSecondSubMenu.value ? "block " : "hidden "} p-0 bg-gray-200 w-full`}>
        {
            items?.map(item => <li
                class="pe-5 ps-11 py-2 border-dashed border-b border-gray-300 last:border-0 text-sm"
                key={item.id}
            >
                <a href={item?.url ?? "#"}>
                    {item?.title}
                </a>
            </li>
            )
        }
    </ul>
}

export default MobileSecondSubMenu
