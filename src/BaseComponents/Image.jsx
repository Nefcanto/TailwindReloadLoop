// https://www.corewebvitals.io/pagespeed/fix-slow-hero-images-core-web-vitals
import { component$ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import {
    getPixel,
    getTenantDomain,
    isDev,
    lg,
    md,
    merge,
    sm,
    xl,
    xs,
    xxl,
} from "Base"

const Image = component$(({
    alt,
    code,
    containerClass,
    hideDefault,
    imageClass,
    isBackground,
    lqip,
    onClick$: _onClick$,
    priority,
    src,
}) => {

    const { url } = useLocation()
    const domain = getTenantDomain(url.hostname)
    const imageIsDefault = src?.includes('000000')
    const id = Date.now()
    let xsWidth
    let smWidth
    let mdWidth
    let lgWidth
    let xlWidth
    let xxlWidth
    const lowQualityImageSource = `${src}/${10}?domain=${domain}`
    const highQualityImageSource = `${src}?domain=${domain}`
    const dynamicProps = {}
    if (priority) {
    } else {
        dynamicProps.loading = "lazy"
    }

    if (lqip) {
        return <div
            class={merge("lqipContainer relative overflow-hidden", containerClass)}
            onClick$={_onClick$}
        >
            <img
                class={merge("lqipPlaceholder absolute object-cover w-full h-full blur-lg transition-opacity duration-500", imageClass)}
                src={lowQualityImageSource}
                alt={alt}
                {...dynamicProps}
            />
            <img
                class={merge("lqipOriginalImage w-full h-full object-cover opacity-0 transition-opacity duration-500", imageClass)}
                dataSrc={highQualityImageSource}
                alt={alt}
                {...dynamicProps}
            />
            <div class="lqipSkeleton absolute inset-0 animate-pulse bg-black/40">
                <div class="w-full h-full flex items-center justify-center">
                    <div class="w-16 h-auto aspect-square border-4 border-white border-t-black/40 rounded-full mx-auto animate-spin" />
                </div>
            </div>
        </div>
    }

    const getWidth = tailwindWidth => {
        const values = tailwindWidth.match(/[\d\/]+/g)
        if (values && values.length > 0) {
            if (tailwindWidth.indexOf("px") > -1) {
                return values[0]
            }
            else if (tailwindWidth.indexOf("%") > -1) {
                return lg
            }
            else if (tailwindWidth.indexOf("/") > -1) {
                return lg
            }
            else {
                return getPixel(values[0])
            }
        }
        if (tailwindWidth.indexOf("full") > -1) {
            return xs
        }
        return null
    }

    const getContainerSizeBasedOnTailwindClassesToPreventCls = () => {
        if (!containerClass) {
            return
        }
        const matches = containerClass.match(/[^ ]*\bw-[^ ]+/g)
        if (!matches) {
            return
        }
        for (let i = 0; i < matches.length; i++) {
            const match = matches[i]
            if (match.startsWith("sm")) {
                smWidth = getWidth(match)
            }
            else if (match.startsWith("md")) {
                mdWidth = getWidth(match)
            }
            else if (match.startsWith("lg")) {
                lgWidth = getWidth(match)
            }
            else if (match.startsWith("xl")) {
                xlWidth = getWidth(match)
            }
            else if (match.startsWith("xxl")) {
                xxlWidth = getWidth(match)
            }
            else {
                xsWidth = getWidth(match)
            }
        }

        smWidth = smWidth || xsWidth
        mdWidth = mdWidth || smWidth
        lgWidth = lgWidth || mdWidth
        xlWidth = xlWidth || lgWidth
        xxlWidth = xxlWidth || xlWidth

        xsWidth = xsWidth || xs
        smWidth = smWidth || sm
        mdWidth = mdWidth || md
        lgWidth = lgWidth || lg
        xlWidth = xlWidth || xl
        xxlWidth = xxlWidth || xxl
    }
    getContainerSizeBasedOnTailwindClassesToPreventCls()

    if (!src?.endsWith(".webp")) {

        dynamicProps.srcset =
            `${src}/${xsWidth}?domain=${domain} ${xs}w, ` +
            `${src}/${smWidth}?domain=${domain} ${sm}w, ` +
            `${src}/${mdWidth}?domain=${domain} ${md}w, ` +
            `${src}/${lgWidth}?domain=${domain} ${lg}w, ` +
            `${src}/${xlWidth}?domain=${domain} ${xl}w, ` +
            `${src}/${xxlWidth}?domain=${domain} ${xxl}w`
    }

    if (isBackground) {
        return <picture>
            Background image (to be implemented soon)
        </picture>
    }

    return <>
        {
            hideDefault && imageIsDefault ?
                <div class='flex flex-col items-center p-1 justify-center gap-0.5 text-red-600 text-xs text-start'>
                    {
                        isDev() &&
                        <>
                            <span>dev mode</span>
                            <span>your image is default</span>
                            <span>remove hideDefault props to display this image</span>
                        </>
                    }
                </div>
                :
                <div
                    class={containerClass || ""}
                    onClick$={_onClick$}
                >
                    <img
                        alt={alt || ""}
                        code={code}
                        class={(
                            (imageClass?.indexOf("object-") > -1 || imageClass?.indexOf("bg-") > -1)
                                ?
                                ""
                                :
                                " w-full h-full object-cover ") + (imageClass || "")
                        }
                        decoding="async"
                        id={id}
                        src={`${src}?domain=${domain}`}
                        {...dynamicProps}

                    />
                </div>
        }

    </>
})

export default Image
