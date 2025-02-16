import { component$ } from "@builder.io/qwik"
import { useHomeUrl } from "Globalization"
import { Image } from "Base"
import {
    ContactInfo,
    Copyright,
    FooterAbout,
    FooterLinks,
    SocialMedia,
} from "Layout"

const Footer = component$(({
    contactInfo,
    footerAboutUs,
    footerCookies,
    footerFirstColLinks,
    footerSecondLinks,
    branding,
    localePathPrefix,
    socialMedia,
}) => {

    return <>

        <SocialMedia {...socialMedia} />

        <section class="bg-gradient-to-b from-custom-color3 to-custom-color31 pt-14">

            <div class="flex w-full items-center justify-center px-5">
                {/* <a
                    aria-label={branding?.slogan}
                    href={useHomeUrl(localePathPrefix)}
                >
                    <Image
                        containerClass="w-44 aspect-2/1 relative"
                        src={branding?.logo}
                        alt={branding?.name}
                    />
                </a> */}
            </div>

            <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:justify-center mt-8 px-5 mb-16 pt-8 text-white">

                <FooterAbout {...footerAboutUs} />

                <div class="sm:col-span-1 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FooterLinks {...footerFirstColLinks} />
                    <FooterLinks {...footerSecondLinks} />
                </div>

                <ContactInfo {...contactInfo} />

            </div>

            <Copyright {...footerCookies} />

        </section>
    </>
})

export default Footer
