import {
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import {
    get,
    LocalizedDate,
} from "Base"
import {
    Breadcrumb,
    RichText,
} from "Shared"

const WarrantyInquiryLayout = component$(({
    breadcrumb,
    content,
    currentLocale,
    localesEnum,
    seo,
    translations,
}) => {

    const loading = useSignal(false)
    const notFound = useSignal(false)
    const warrantyCard = useSignal(null)

    useVisibleTask$(() => {
        on("searchWarranty", value => {
            loading.value = true
            notFound.value = false
            get(`/warrantyCard/get?warrantyNumber=${value}`).then(data => {
                loading.value = false
                warrantyCard.value = data.warrantyCard
                if (data?.error?.code == 404) {
                    notFound.value = true
                }
            }, error => {
                loading.value = false
                console.error(error)
            })
        })
    }, { strategy: "document-ready" })

    const resultLabel = "font-bold text-md bg-gray-100 rounded-sm p-2"
    const resultValue = "font-light text-sm p-2"

    return <main>
        <Breadcrumb breadcrumb={breadcrumb} />
        <h1 class={`text-center text-2xl font-bold after:content-[""] after:block after:mx-auto after:mt-4 after:w-16 after:h-[5px] after:bg-custom-color1 after:rounded-lg`}>
            {seo?.pageTitle || translations.warrantyWarrantyInquiry}
        </h1>
        <div
            class="relative w-full sm:w-4/5 mx-auto md:w-[500px] h-12 md:h-14"
            onKeyDown$={e => {
                if (e.key === "Enter") {
                    trigger("searchWarranty", e.target.value)
                }
            }}
        >
            <svg
                viewBox="0 -960 960 960"
                class={`w-5 h-5 absolute start-2 w-7 h-7 top-1/2 -translate-y-1/2 ${currentLocale?.isRtl ? "-scale-x-100" : ""}`}
            >
                <path d="M778-164 528-414q-30 26-69 40t-77 14q-92.231 0-156.115-63.837Q162-487.675 162-579.837 162-672 225.837-736q63.838-64 156-64Q474-800 538-736.115 602-672.231 602-580q0 41-15 80t-39 66l250 250-20 20ZM382-388q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Z" />
            </svg>
            <input
                class="flex-1 w-full h-full flex items-center gap-2 mt-12 rounded-lg border-2 border-transparent ps-10 pe-6 py-2 bg-gray-100 focus:bg-white focus:border-custom-color1 transition-all duration-500 outline-hidden"
                placeholder={translations.warrantyWarrantyWarrantyNumber}
            />
            <span class="p-2 my-2 text-xs bg-orange-100 rounded-sm flex items-center justify-start">
                <svg
                    viewBox="0 -960 960 960"
                    class="fill-orange-600 w-5 aspect-square"
                >
                    <path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm-80-240v-480h160v480H400Z" />
                </svg>
                {translations.warrantyEnterWarrantyNumber}
            </span>
        </div>
        {
            loading.value &&
            <div class="mt-16">
                <svg
                    class="mx-auto w-10 aspect-square animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                </svg>
            </div>
        }
        {
            notFound.value &&
            <div class="w-fit text-lg mx-auto my-28 text-red-700">
                {translations.warrantyWarrantyNotFound}
            </div>
        }
        <div class="mx-auto max-w-md text-center mt-14">
            {
                warrantyCard.value &&
                <div class="grid grid-cols-2 grid-rows-16 gap-2">
                    <span class={resultLabel}>{translations.warrantyWarrantyNumber}</span>
                    <span class={resultValue}>{warrantyCard.value?.warrantyNumber}</span>
                    <span class={resultLabel}>{translations.warrantyStartDate}</span>
                    <span class={resultValue}>
                        <LocalizedDate
                            localesEnum={localesEnum}
                            utcDate={warrantyCard.value?.startUtcDate}
                            localeKey={currentLocale.key}
                        />
                    </span>
                    <span class={resultLabel}>{translations.warrantyEndDate}</span>
                    <span class={resultValue}>
                        <LocalizedDate
                            localesEnum={localesEnum}
                            utcDate={warrantyCard.value?.endUtcDate}
                            localeKey={currentLocale.key}
                        />
                    </span>
                    <span class={resultLabel}>{translations.warrantyContactPersonDisplayName}</span>
                    <span class={resultValue}>{warrantyCard.value?.contactsPersonDisplayName}</span>
                </div>
            }
        </div>
        <div class="max-w-5xl mx-auto px-5 xl:px-0 mt-40">
            <RichText content={content} />
        </div>
    </main>
})

export default WarrantyInquiryLayout
