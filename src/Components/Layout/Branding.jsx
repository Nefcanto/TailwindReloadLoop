import { component$ } from "@builder.io/qwik"
import { useHomeUrl } from "Globalization"
import { Image } from "Base"
import { MetallicShine } from "Layout"

const Branding = component$(({
    class: internalClass,
    localePathPrefix,
    logo,
    name,
    slogan,
}) => {
    return <div class="flex w-full items-center justify-center basis-1/3">
        <a
            aria-label={slogan}
            href={useHomeUrl(localePathPrefix)}
        >
            <MetallicShine>
                <Image
                    alt={name}
                    containerClass="w-36 aspect-[4/1.1] relative -z-30"
                    priority
                    src={logo}
                />
            </MetallicShine>
        </a>
    </div>
})

export default Branding
