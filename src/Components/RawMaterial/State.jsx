const State = ({ rawMaterialState }) => {

    return <>
        <section>
            <div class="bg-gradient-to-b from-[#003566] to-[#001d3d] p-10 md:p-16 mt-10 text-center">
                <span class="font-bold text-lg text-gray-400 text-center">
                    {rawMaterialState?.title}
                </span>
                <div class="flex flex-col md:flex-row justify-center items-center gap-16 px-10 mt-10 md:mt-16">
                    {
                        rawMaterialState.items?.map(item =>
                            <div
                                class="flex flex-col justify-center items-center gap-3 md:gap-4"
                                key={item?.id}
                            >
                                <div
                                    dangerouslySetInnerHTML={item?.icon}
                                    class="w-14 fill fill-custom-color1 hover:scale-125 duration-300 transition-all"
                                />
                                <div class="text-2xl font-black text-center text-white">{item?.subtitle}</div>
                                <div class="text-lg font-bold text-center text-white">{item?.title}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    </>
}

export default State
