import { Image } from "Base"
import { Progress } from "Shared"
import { Cta } from "SignInParts"

const Layout = props => {

    const {
        changePhoneProps,
        emptyOtp,
        emptyPhone,
        invalidOtp,
        invalidPhone,
        otpProps,
        phone,
        phoneProps,
        sendingOtp,
        sendOtpProps,
        seo,
        signingIn,
        signInImages,
        signInProps,
        timer,
        translations,
        visibleOtp,
        visiblePhone,
    } = props

    const container = "relative w-full "
    const field = "w-full bg-gray-200 rounded-lg p-2 py-3 "
    const label = "text-black text-xl font-bold mb-3 "
    const error = "text-red-600 text-sm font-light mt-2 "

    return <div class="max-w-5xl mx-auto px-5 xl:px-0">
        <div class="flex border rounded-2xl bg-white shadow mt-44 text-center">
            <div class="relative hidden md:block w-1/2 rounded-s-2xl bg-custom-color3 overflow-hidden">
                <Image
                    alt={seo.metaTitle}
                    containerClass="absolute max-w-full w-1/1 h-full"
                    src={signInImages?.image}
                />
            </div>
            <div class="w-full md:w-1/2">
                {/* <h2 class="mb-10 text-3xl font-semibold text-slate-700">{translations.registerOrSignIn}</h2> */}
                <Image
                    alt={seo.metaTitle}
                    containerClass="w-36 aspect-2/1 mx-auto my-4"
                    src={signInImages?.logo}
                />
                {
                    visibleOtp &&
                    <div class="mb-4 max-w-lg mx-auto">
                        <div class="flex flex-col md:flex-row items-center justify-between text-sm text-slate-800">
                            {translations.otpSent}
                            <span class="text-lg font-semibold text-slate-900 my-1">{phone}</span>
                            <Cta
                                {...changePhoneProps}
                                text={translations.changePhone}
                                reverse
                                class="max-w-fit px-6 mt-0 bg-custom-color1 text-custom-color2 hover:scale-110 hover:text-black transition-all duration-300"
                            />
                        </div>
                    </div>
                }
                <div class="max-w-full w-[460px] mx-auto relative p-5 md:px-12 md:pb-12 mx-auto grid place-items-center ">
                    {
                        visiblePhone &&
                        <div class={container}>
                            <div class={label}>{translations.phoneLabel}</div>
                            <input
                                {...phoneProps}
                                class={`bg-custom-color2 outline-none ${field}`}
                                placeholder={translations.phone}
                            />
                            {
                                emptyPhone &&
                                <div class={error}>{translations.emptyPhone}</div>
                            }
                            {
                                invalidPhone &&
                                <div class={error}>{translations.invalidPhone}</div>
                            }
                        </div>
                    }
                    {
                        visibleOtp &&
                        <div class={container}>
                            <div class={label}>{translations.otpLabel}</div>
                            <input
                                {...otpProps}
                                class={`bg-custom-color2 outline-none ${field}`}
                                placeholder={translations.otp}
                            />
                            {
                                emptyOtp &&
                                <div class={error}>{translations.emptyOtp}</div>
                            }
                            {
                                invalidOtp &&
                                <div class={error}>{translations.invalidOtp}</div>
                            }
                        </div>
                    }
                    {
                        visiblePhone &&
                        <Cta
                            {...sendOtpProps}
                            large
                            reverse
                            progress={sendingOtp}
                            text={sendingOtp ? translations.sendingOtp : translations.sendOtp}
                            class="bg-custom-color1 text-custom-color2 hover:scale-110 hover:text-black transition-all duration-300"
                        />
                    }
                    {
                        visibleOtp &&
                        <div class={container}>
                            <Cta
                                {...signInProps}
                                large
                                reverse
                                progress={signingIn}
                                text={signingIn ? translations.signingIn : translations.signIn}
                                class="bg-custom-color1 text-custom-color2 hover:scale-110 hover:text-black transition-all duration-300"
                            />
                            <div class="absolute start-0 end-0 mt-4 text-sm">
                                {
                                    timer
                                        ?
                                        <div>{timer}</div>
                                        :
                                        sendingOtp
                                            ?
                                            <div class="flex items-center gap-3 justify-center text-xs">
                                                {translations.sendingOtp} <Progress small />
                                            </div>
                                            :
                                            <a
                                                {...sendOtpProps}
                                                class="cursor-pointer"
                                            >
                                                {translations.resend}
                                            </a>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Layout
