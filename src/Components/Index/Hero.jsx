import {
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import { Video } from "Base"
import {
    Language,
    Location,
    Search,
} from "Svg"
import {
    HorizontalMenu,
    TrucksSearchBox,
} from "Index"

const Hero = component$(({
    currentLocale,
    defaultLocale,
    desktopVideo,
    isRtl,
    localePathPrefix,
    mobileVideo,
    searchStatics,
    subtitle,
    title,
    videoPoster,
    ...rest
}) => {

    const isLanguageMenuOpen = useSignal(false)
    const iconContainerClass = "transition-all duration-200 flex flex-col items-center hover:scale-[105%] transition-all cursor-pointer group md:max-h-none"
    const iconClass = "w-8 h-8 xl:w-10 xl:h-10"
    const titleClass = "hidden xl:block text-xs"

    const observeHero = useVisibleTask$(() => {
        const heroElement = document.getElementById("hero")
        heroElement.style.setProperty("transform", "translateY(0)", "important")
        heroElement.classList.remove("opacity-0")
    }, {
        strategy: "intersection-observer"
    })

    return <div
        class="hero max-h-screen min-h-screen md:max-h-none md:min-h-[initial] h-[75vh] relative border-b-[10px] border-custom-color1"
    >
        <div
            id="hero"
            ref={observeHero}
            class="z-20 absolute top-0 end-0 bottom-0 start-0 w-full h-full text-center opacity-0 translate-y-[90px] transition-all duration-[1500ms]"
        >

            {/* <div class="hidden xl:block w-full mx-auto place-items-center mt-16">
                <HorizontalMenu {...rest} />
            </div> */}
            <div class="copy mt-20 md:mt-36">
                <h1 class="text-2xl font-light">{title}</h1>
                <p class="text-2xl font-black w-1/2 m-auto mt-2">{subtitle}</p>
            </div>
            <div class="lg:start-20">
                <TrucksSearchBox
                    isRtl={isRtl}
                    searchStatics={searchStatics}
                    localePathPrefix={localePathPrefix}

                />
            </div>
        </div>
        <Video
            containerClass="hidden md:block h-full"
            videoClass="h-full"
            autoplay
            loop
            muted
            playsinline
            priority
            link={desktopVideo}
        />
        <Video
            containerClass="md:hidden h-full"
            videoClass="h-full"
            autoplay
            loop
            muted
            playsinline
            priority
            poster={videoPoster}
            link={mobileVideo}
        />
        <div
            class="transition-all duration-200 absolute bg-transparent top-0 start-0 end-0 translate-y-1/2 z-20 m-auto flex px-3 items-end justify-end pt-3 select-none mt-60 md:hidden"
        >
            <div class={`flex flex-col items-end md:gap-1.5 basis-1/3 place-content-end xl:gap-3`}>
                <div class={iconContainerClass}>
                    <Search class={iconClass} />
                </div>
                <a
                    class={iconContainerClass}
                    href="/trucks"
                >
                    <Location class={iconClass} />
                </a>
                <div
                    class={iconContainerClass}
                    onClick$={() => isLanguageMenuOpen.value = !isLanguageMenuOpen.value}
                >
                    <Language class={iconClass} />
                    {/* <span class={`${titleClass} uppercase ${currentLocale.key === localesEnum.fa ? "mt-1" : ""}`}>{currentLocale?.key}</span> */}
                    {
                        isLanguageMenuOpen.value &&
                        <div class={`absolute top-20 bg-white shadow-lg px-2 py-6 rounded-xl text-center`}>
                            <div class="w-1 h-1 border-t-8 border-e-8 border-8 rotate-45 border-white absolute -top-2 end-0 start-0 mx-auto"></div>
                            {
                                locales?.map(locale => <a
                                    key={locale.id}
                                    href={`${defaultLocale.key === locale.key ? "/" : locale.key}`}
                                    class="block px-3 py-1 rounded-full hover:bg-custom-color1"
                                >
                                    {locale.localKey}
                                </a>)
                            }
                        </div>
                    }
                </div>
            </div>
        </div >
    </div >
})

export default Hero
