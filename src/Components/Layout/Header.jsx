import {
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import {
    Branding,
    Hamburger,
    HorizontalMenu,
    Menu,
} from "Layout"
import {
    Language,
    Location,
    Search,
    User,
} from "Svg"

const Header = component$(({
    branding,
    currentLocale,
    defaultLocale,
    footerCookies,
    header,
    localePathPrefix,
    locales,
    localesEnum,
    socialMedia,
    menuItems,
    ...rest
}) => {

    const {
        accountTitle,
        searchTitle,
        trucksTitle,
    } = header

    const isLanguageMenuOpen = useSignal(false)
    const hasScrolledDown = useSignal()

    useVisibleTask$(() => {
        document.addEventListener("scroll", () => {
            hasScrolledDown.value = window.scrollY > 10 ? true : false
        })
    }, {
        strategy: "document-ready"
    })

    const iconContainerClass = "transition-all duration-200 flex flex-col items-center hover:scale-[105%] transition-all cursor-pointer group md:max-h-none"
    const iconClass = "w-8 h-8 xl:w-10 xl:h-10 fill-custom-color2 hidden md:block"
    const titleClass = "hidden xl:block text-xs"

    return <div
        class={`${hasScrolledDown.value ? "bg-white shadow-xl" : "text-custom-color2 bg-transparent"} fixed z-20 transition-all duration-200 bg-transparent header top-0 start-0 end-0 z-30 flex justify-between px-3 items-center md:h-20 md:px-6 py-3 select-none`}
    >

        <Menu
            footerCookies={footerCookies}
            currentLocale={currentLocale}
            locales={locales}
            menuItems={menuItems}
            socialMedia={socialMedia}
        />

        <Branding
            {...branding}
            class="basis-1/3"
            localePathPrefix={localePathPrefix}
        />

        <div class={`flex flex-row items-end ${hasScrolledDown.value ? "gap-0" : "gap-1.5"} md:gap-1.5 basis-1/3 place-content-end xl:gap-3`}>
            <div class={iconContainerClass + ` ${hasScrolledDown.value ? "max-h-0" : "max-h-64"}`}>
                <Search class={iconClass} />
                <span class={titleClass}>{searchTitle}</span>
            </div>
            <a
                class={iconContainerClass + ` ${hasScrolledDown.value ? "max-h-0" : "max-h-64"}`}
                href="/track?module=trucks&entityType=truck"
            >
                <Location class={iconClass} />
                <span class={titleClass}>{trucksTitle}</span>
            </a>
            <div
                class={iconContainerClass + " relative" + ` ${hasScrolledDown.value ? "max-h-0" : "max-h-64"}`}
                onClick$={() => isLanguageMenuOpen.value = !isLanguageMenuOpen.value}
            >
                <Language class={iconClass} />
                <span class={`${titleClass} uppercase`}>{currentLocale?.key}</span>
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
            <a
                href={header.loginLink}
                class={`bg-custom-color1 rounded-xl m-1 md:m-0 p-1 md:ms-3 xl:p-2 ${iconContainerClass}`}
            >
                <User class="xl:w-8 xl:h-8 fill-custom-color2" />
                <span class={titleClass}>{accountTitle}</span>
            </a>
        </div>
    </div >
})

export default Header
