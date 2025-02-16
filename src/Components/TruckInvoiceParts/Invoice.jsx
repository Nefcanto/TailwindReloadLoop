import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import {
    Image,
    LocalizedDate,
} from "Base"
import {
    CheckBook,
    Phone,
    PinDrop,
} from "Svg"
import {
    AdlGhostarChaqlovandi,
    AkbarGanji,
    AsemanAbi,
    AzarTarkhis,
    ChavoshJam,
    Default,
    HoberTejarat,
    SaberZareAhmadi,
    TankerBarOmidArdebil,
    TarabarSadrahJam,
    TejaratTandisYektaSabalan,
} from "LetterHeads"
import { ReceiptForm } from "TruckInvoiceParts"

const Invoice = component$(({
    adlGhostarChaqlovandiLetterHead,
    akbarGanjiLetterHead,
    ancillaryFeesInvoice,
    asemanAbiLetterHead,
    azarTarkhisLetterHead,
    chavoshJamLetterHead,
    hoberTejaratLetterHead,
    invoice,
    invoiceParts,
    locale,
    locales,
    localesEnum,
    receiptForm,
    saberZareAhmadiLetterHead,
    tankerBarOmidArdebilLetterHead,
    tarabarSadrahJamLetterHead,
    tejaratTandisYektaSabalanLetterHead,
    translations,
    truckInvoice,
}) => {
    const {
        invoice,
        truck,
        truckInvoice: actualTruckInvoice,
    } = truckInvoice

    const invoiceComponents = {
        AdlGhostarChaqlovandi: children => <AdlGhostarChaqlovandi
            data={adlGhostarChaqlovandiLetterHead}
            invoice={invoice}
        >
            {children}
        </AdlGhostarChaqlovandi>,
        AkbarGanji: children => <AkbarGanji
            data={akbarGanjiLetterHead}
            invoice={invoice}
        >
            {children}
        </AkbarGanji>,
        SaberZareAhmadi: children => <SaberZareAhmadi
            data={saberZareAhmadiLetterHead}
            invoice={invoice}
        >
            {children}
        </SaberZareAhmadi>,
        TarabarSadrahJam: children => <TarabarSadrahJam
            data={tarabarSadrahJamLetterHead}
            invoice={invoice}
        >
            {children}
        </TarabarSadrahJam>,
        TejaratTandisYektaSabalan: children => <TejaratTandisYektaSabalan
            data={tejaratTandisYektaSabalanLetterHead}
            invoice={invoice}
        >
            {children}
        </TejaratTandisYektaSabalan>,
        AsemanAbi: children => <AsemanAbi
            data={asemanAbiLetterHead}
            invoice={invoice}
        >
            {children}
        </AsemanAbi>,
        TankerBarOmidArdebil: children => <TankerBarOmidArdebil
            data={tankerBarOmidArdebilLetterHead}
            invoice={invoice}
        >
            {children}
        </TankerBarOmidArdebil>,
        ChavoshJam: children => <ChavoshJam
            data={chavoshJamLetterHead}
            invoice={invoice}
        >
            {children}
        </ChavoshJam>,
        AzarTarkhis: children => <AzarTarkhis
            data={azarTarkhisLetterHead}
            invoice={invoice}
        >
            {children}
        </AzarTarkhis>,
        HoberTejarat: children => <HoberTejarat
            data={hoberTejaratLetterHead}
            invoice={invoice}
        >
            {children}
        </HoberTejarat>,
        Default: children => <Default
            invoice={invoice}
            invoiceParts={invoiceParts}
            locales={locales}
            locale={locale}
            localesEnum={localesEnum}
        >
            {children}
        </Default>
    }

    const printPageArea = $(() => {
        console.log(`order-${invoice.order.id}`)
        let printContent = document.getElementById(`order-${invoice.order.id}`).innerHTML
        let originalContent = document.body.innerHTML
        document.body.innerHTML = printContent
        window.print()
        document.body.innerHTML = originalContent
        window.location.reload()
    })

    const orderItemHeadingClass = "font-bold text-md p-2 md:border-b md:border-gray-500"
    const orderItemValueClass = "font-semilight text-sm p-2"
    const isOpen = useSignal(false)

    const compare = (a, b) => {
        if (a.relatedItems.entity.order < b.relatedItems.entity.order) {
            return -1
        }
        if (a.relatedItems.entity.order > b.relatedItems.entity.order) {
            return 1
        }
        return 0
    }

    const letterHeadComponent = invoiceComponents?.[truck?.companyLetterHead] ? invoiceComponents[truck?.companyLetterHead] : invoiceComponents["Default"]

    return <>
        {letterHeadComponent(<>
            <div class="[&>div]:w-full [&>div]:text-center grid grid-cols-1 place-items-center sm:grid-cols-2 grid-2">
                {
                    invoice?.orderItems?.sort(compare)?.map(orderItem => <div key={orderItem?.id}>
                        <div class={orderItemHeadingClass}>
                            {orderItem.relatedItems.entity.title}
                        </div>
                        <div class={orderItemValueClass}>
                            {orderItem.totalPrice.toLocaleString()}
                        </div>
                    </div>
                    )
                }
            </div>
            {
                invoice?.order?.relatedItems?.ancillaryFees?.map(fee => <div
                    class="[&>div]:w-full [&>div]:text-center grid grid-cols-1 place-items-center sm:grid-cols-2 grid-2 mt-5 gap-5"
                    key={fee.id}
                >
                    <div class="flex flex-col gap-2">
                        <span class={orderItemHeadingClass}>
                            {ancillaryFeesInvoice.ancillaryFeesTitle}
                        </span>
                        <span class={orderItemValueClass}>
                            {fee.title}
                        </span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <span class={orderItemHeadingClass}>
                            {ancillaryFeesInvoice.amountTitle}
                        </span>
                        <span class={orderItemValueClass}>
                            {fee.amount}
                        </span>
                    </div>

                </div>
                )
            }
            <div class="border-t py-2 [&>div]:w-full [&>div]:gap-2 [&>div]:flex [&>div]:place-items-center" >
                <div class="flex flex-col sm:flex-row justify-center items-center p-8 rounded">
                    <div>
                        <span class="font-bold text-lg">
                            {invoiceParts?.customerName}:
                        </span>
                        <span>
                            {invoice?.order?.contactsPersonDisplayName}
                        </span>
                    </div>
                    <div class="text-center md:text-start">
                        <span class="font-bold text-lg">
                            {invoiceParts.totalCost}:
                        </span>
                        <span>
                            {invoice?.order?.totalPrice?.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div >
            {/* <div class="border-t-8 border-double border-custom-color1 p-3 flex">
                <div class="w-full md:w-1/2 flex flex-col gap-4">
                    <div class="flex flex-col place-items-center gap-3 md:flex-row">
                        <PinDrop class="w-7 aspect-square fill-black" />
                        <span class="md:text-sm w-fit">{invoiceParts.address}</span>
                    </div>
                    <div class="flex flex-col place-items-center gap-3 md:flex-row">
                        <Phone class="w-7 aspect-square fill-black" />
                        <span class="md:text-sm w-fit">{invoiceParts.phoneNumberTitle}:</span>
                        <span class="md:text-sm w-fit">{invoiceParts.phoneNumber}</span>

                    </div>
                </div>
            </div> */}
            {
                truckInvoice?.truckInvoice?.paymentCode &&
                <div class="flex flex-row gap-3 font-bold text-md mb-3">
                    <CheckBook class="w-7 aspect-square fill-black" />
                    <span>{invoiceParts?.paymentCode}:</span>
                    <span>{truckInvoice?.truckInvoice?.paymentCode}</span>
                </div>
            }
            <div class="flex flex-col mb-7 sm:mb-0">
                {
                    invoice?.order?.relatedItems?.bankAccounts.map(bankAccount => <div key={bankAccount?.id}>
                        <div class="flex flex-col md:flex-row gap-3 place-items-center ">
                            <CheckBook class="w-7 aspect-square fill-black" />
                            <div class="flex flex-col sm:flex-row gap-2 mb">
                                <div class="font-bold text-md text-center">{invoiceParts?.ibanNumber}:</div>
                                <div class="font-bold text-md">{bankAccount?.iban}</div>
                            </div>
                            <div class="flex flex-row gap-3">
                                <div class="font-bold text-md">{invoiceParts?.bankName}:</div>
                                <div class="font-bold text-md">{bankAccount?.bank}</div>
                            </div>
                            <div class="font-bold text-md">{bankAccount?.contactsPersonDisplayName}</div>
                        </div>
                    </div>
                    )
                }
            </div>
            {
                invoice?.order?.relatedItems?.receipts?.length > 0 ? <div class="my-2 flex flex-col text-md font-bold gap-2">
                    <span class="p-2 rounded-t">{invoiceParts.receipt}</span>
                    {
                        invoice?.order?.relatedItems?.receipts?.map(receipt => <span key={receipt.id}>
                            <span class="px-2">
                                {receipt.method}
                            </span>
                            -
                            <span class="px-2">
                                {receipt.trackingNumber}
                            </span>
                            <span class="px-2">
                                {receipt.amount}
                            </span>
                            -
                            <span class="px-2">
                                <LocalizedDate
                                    utcDate={receipt.utcDateOnly}
                                    locales={locales}
                                    localesEnum={localesEnum}
                                />
                            </span>
                        </span>
                        )
                    }
                </div>
                    :
                    null
            }
            <div class="flex flex-col mt-5 px-3">
                <span class="bg-red-500 opacity-75 text-md w-fit p-2 font-bold rounded">{invoiceParts?.receiptText}</span>
                <div
                    class="cursor-pointer transition-all duration-200 p-2 mt-2 border-2 border-gray-300 hover:bg-white text-center rounded w-32 rounded animate-ring"
                    onClick$={() => isOpen.value = true}
                >
                    <div class="flex flex-row justify-center items-center gap-2">
                        <span class="relative flex h-3 w-3">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <span class="w-full">{invoiceParts?.receiptUploadButton}</span>
                    </div>
                </div>
            </div>
            <ReceiptForm
                isOpen={isOpen}
                order={invoice?.order}
                receiptForm={receiptForm}
                translations={translations}
            />
            <a
                class="block p-2 text-md font-bold w-full mt-5 border-2 border-gray-300 hover:bg-white text-center rounded"
                href={invoiceParts?.seeMoreLink}
            >{invoiceParts?.seeMore}</a>
        </>)}
    </>
}
)

export default Invoice
