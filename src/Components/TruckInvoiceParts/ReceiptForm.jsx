import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import {
    Modal,
    post,
    upload,
} from "Base"
import {
    Close,
    Loading,
} from "Svg"

const ReceiptForm = component$(({
    isOpen,
    order,
    receiptForm,
    translations,
}) => {
    console.log(receiptForm)
    const label = "font-bold text-lg mb-3"

    const field = "flex-1 w-full h-full flex items-center gap-2 rounded-lg border-2 border-transparent p-4 bg-gray-200 focus:bg-white focus:border-custom-color1 transition-all duration-500 outline-none placeholder-gray-500"

    const formStep = useSignal(1)
    const note = useSignal("")
    const isFormValid = useSignal(false)
    const method = useSignal("")
    const bank = useSignal("")
    const branchName = useSignal("")
    const branchCode = useSignal("")
    const ownerName = useSignal("")
    const amount = useSignal(0)
    const referenceNumber = useSignal("")
    const trackingNumber = useSignal("")
    const newReceipt = useSignal({})
    const progress = useSignal(false)
    const fileInputRef = useSignal()

    const handleNextStep = $(() => {
        formStep.value += 1
    })

    const handlePerviousStep = $(() => {
        formStep.value = 1
    })

    const inputChangeHandler = $((signal, value) => {
        signal.value = value
    })

    const uploadReceiptImage = $(() => {
        const fileInputElement = document.getElementById("receipt-image")
        let form = new FormData()
        form.append("file", fileInputElement.files[0])
        upload(`/receipt/setImage?id=${newReceipt.value.id}&property=ImageGuid`, form)
            .then(data => {
                return data
            }, e => {
                console.log(error)
            })
    })

    const validateForm = $(() => {
        const fileInputElement = document.getElementById("receipt-image")
        const isFileAttached = fileInputElement?.files?.[0] ? true : false
        if (isFileAttached && note.value != "" && method.value != "" && bank.value != "" && referenceNumber.value != "" &&
            ownerName.value != "" && branchName.value != "" && trackingNumber.value != "" && branchCode.value != "" && amount.value != 0) {
            isFormValid.value = true
            return
        }
        isFormValid.value = false
    })

    const clearFormData = $(() => {
        note.value = ""
        isFormValid.value = false
        method.value = ""
        bank.value = ""
        branchName.value = ""
        branchCode.value = ""
        ownerName.value = ""
        amount.value = 0
        referenceNumber.value = ""
        trackingNumber.value = ""
        formStep.value = 1
    })

    const handleSubmit = $(async () => {
        validateForm()
        if (!isFormValid.value) {
            const fileInputElement = document.getElementById("receipt-image")
            const isFileAttached = fileInputElement?.files?.[0] ? true : false
            if (!isFileAttached) {
                alert(translations.noReceiptImageError)
            }
            if (method.value == "") {
                alert(translations.noReceiptMethod)
            }
            if (ownerName.value == "") {
                alert(translations.noReceiptOwnerName)
            }
            if (bank.value == "") {
                alert(translations.noReceiptBank)
            }
            if (branchName.value == "") {
                alert(translations.noReceiptBranchName)
            }
            if (branchCode.value == "") {
                alert(translations.noReceiptBranchCode)
            }
            if (amount.value == "") {
                alert(translations.noReceiptAmount)
            }
            if (referenceNumber.value == "") {
                alert(translations.noReceiptReferenceNumber)
            }
            if (trackingNumber.value == "") {
                alert(translations.noReceiptTrackingNumber)
            }
            if (note.value == "") {
                alert(translations.noReceiptDescription)
            }
            return
        }
        const receiptData = {}
        progress.value = true
        receiptData.Note = note.value
        receiptData.Method = method.value
        receiptData.OwnerName = ownerName.value
        receiptData.Bank = bank.value
        receiptData.BranchName = branchName.value
        receiptData.BranchCode = branchCode.value
        receiptData.Amount = amount.value
        receiptData.ReferenceNumber = referenceNumber.value
        receiptData.TrackingNumber = trackingNumber.value
        receiptData.SubmitterPersonGuid = order.personGuid
        receiptData.OrderGuid = order.guid
        receiptData.UtcDate = new Date().toISOString()
        receiptData.IsApproved = false
        receiptData.IsSeen = false

        try {
            const res = await post("/receipt/create", receiptData)
            newReceipt.value = res.receipt

            const fileInputElement = fileInputRef.value
            let form = new FormData()
            form.append("file", fileInputElement.files[0])

            await upload(`/receipt/setImage?id=${newReceipt.value.id}&property=ImageGuid`, form)

            isOpen.value = false
            progress.value = false
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    })

    return <Modal
        isOpen={isOpen}
        class="absolute top-10 translate-y-0 md:top-1/2 md:-translate-y-1/2 end-1/2 -translate-x-1/2 overflow-hidden"
    >
        <div class="flex items-start justify-start">
            <Close
                class="w-6 h-6"
                onClick$={() => {
                    clearFormData()
                    isOpen.value = false
                }}
            />
        </div>
        {
            progress.value &&
            <span class="absolute top-0 start-0 z-40 w-full h-full bg-white/90">
                <Loading class="absolute aspect-square inset-0 m-auto animate-spin w-20" />
            </span>
        }
        <div class={`${formStep.value === 1 ? "flex" : "hidden"} transition-all duration-500 flex-col gap-6 place-items-center w-full p-4`}>
            {/* <span class={label}>*{receiptForm.method}</span> */}
            <input
                class={field}
                type="text"
                placeholder={receiptForm.method}
                onInput$={e => inputChangeHandler(method, e.target.value)}
            />
            {/* <span class={label}>*{receiptForm.bank}</span> */}
            <input
                class={field}
                type="text"
                placeholder={receiptForm.bank}
                onInput$={e => inputChangeHandler(bank, e.target.value)}
            />
            {/* <span class={label}>*{receiptForm.ownerName}</span> */}
            <input
                class={field}
                type="text"
                placeholder={receiptForm.ownerName}
                onInput$={e => inputChangeHandler(ownerName, e.target.value)}
            />
            {/* <span class={label}>*{receiptForm.branchName}</span> */}
            <input
                class={field}
                type="text"
                placeholder={receiptForm.branchName}
                onInput$={e => inputChangeHandler(branchName, e.target.value)}
            />
            {/* <span class={label}>*{receiptForm.branchCode}</span> */}
            <input
                class={field}
                type="text"
                placeholder={receiptForm.branchCode}
                onInput$={e => inputChangeHandler(branchCode, e.target.value)}
            />
            {/* <span class={label}>*{receiptForm.amount}</span> */}
            <button
                class="bg-blue-500 text-white text-xl font-bold px-14 p-2 hover:scale-110 duration-300 transition-all rounded-lg"
                type="button"
                onClick$={handleNextStep}
            >
                {receiptForm.nextButtonTitle}
            </button>
        </div>
        <div class={`${formStep.value != 1 ? "flex" : "hidden"} transition-all duration-500 flex-col gap-6 place-items-center w-full`}>
            <input
                class={field}
                type="text"
                placeholder={receiptForm.amount}
                onInput$={e => {
                    const numericValue = e.target.value.replace(/[^0-9]/g, "")
                    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    e.target.value = formattedValue
                    inputChangeHandler(amount, numericValue)
                }}
            />
            <input
                class={field}
                type="text"
                placeholder={receiptForm.trackingNumber}
                onInput$={e => inputChangeHandler(trackingNumber, e.target.value)}
            />
            <input
                class={field}
                type="text"
                placeholder={receiptForm.referenceNumber}
                onInput$={e => inputChangeHandler(referenceNumber, e.target.value)}
            />
            {/* <span class={label}>*{receiptForm.shortDescription}</span> */}
            <textarea
                class={`${field} resize-none`}
                rows="5"
                placeholder={receiptForm.shortDescription}
                onInput$={e => inputChangeHandler(note, e.target.value)}
            />
            <button
                class="bg-blue-500 text-white text-xl font-bold px-14 p-2 hover:scale-110 duration-300 transition-all rounded-lg"
                type="button"
                onClick$={handlePerviousStep}
            >
                {receiptForm.perviousButtonTitle}
            </button>
        </div>
        <div class={`${formStep.value != 1 ? "flex" : "hidden"} transition-all duration-500 flex-row justify-between items-center gap-5 mt-10`}>
            <input
                ref={fileInputRef}
                type="file"
                id="receipt-image"
            />
            {/* <input
                ref={fileInputRef}
                type="file"
                id="receipt-image"
                onChange={e => inputChangeHandler(fileInputRef, e.target.files[0])}
            /> */}
            <button
                class="border-2 border-gray-300 bg-custom-color1 hover:bg-white text-center rounded w-28 p-2 rounded"
                type="button"
                onClick$={handleSubmit}
            >
                {receiptForm.saveButton}
            </button>
        </div>
    </Modal>
})

export default ReceiptForm
