const Options = ({ contactOptions }) => {

    return <>

        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 p-10 rounded-2xl mt-4">
            {
                contactOptions?.items?.map(item => <a
                    href={item.link}
                    class="shadow-xl p-10 flex flex-col items-center justify-center hover:shadow-2xl rounded-xl hover:scale-110 transition-all duration-500"
                    key={item?.id}
                >
                    <span
                        class="w-16 h-16 [&>svg]:w-14 [&>svg]:h-14"
                        dangerouslySetInnerHTML={item.icon}
                    >
                    </span>
                    <span class="font-bold text-md text-center p-3">{item.title}</span>
                </a>
                )
            }
        </section>
    </>

}

export default Options
