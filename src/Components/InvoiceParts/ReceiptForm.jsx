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
import { Loading } from "Svg"

const ReceiptForm = component$(({
    isOpen,
    order,
    receiptForm,
    receipts,
    translations,
}) => {

    const label = "font-bold text-lg mb-3"

    const field = "flex-1 w-full h-full flex items-center gap-2 mb-9 rounded-lg border-2 border-transparent p-3 bg-gray-200 focus:bg-white focus:border-custom-color1 transition-all duration-500 outline-none"

    const shortDescription = useSignal("")
    const isFormValid = useSignal(false)
    const method = useSignal("")
    const trackingNumber = useSignal("")
    const referenceNumber = useSignal("")
    const newReceipt = useSignal({})
    const progress = useSignal(false)

    const fileInputRef = useSignal()

    const inputChangeHandler = $((signal, value) => {
        signal.value = value
    })

    const uploadReceiptImage = $(() => {

        const fileInputElement = document.getElementById("receipt-image")
        let form = new FormData()
        form.append("file", fileInputElement.files[0])
        upload(`/receipt/setImage?id=${newReceipt.value.id}&property=ImageGuid`, form)
            .then(data => {
            }, e => {
            })
    })

    const validateForm = $(() => {
        const fileInputElement = document.getElementById("receipt-image")
        const isFileAttached = fileInputElement?.files?.[0] ? true : false
        if (isFileAttached && shortDescription.value != "" && method.value != "" && trackingNumber.value != "" && referenceNumber.value != "") {
            isFormValid.value = true
            return
        }
        isFormValid.value = false
    })

    const handleSubmit = $(() => {
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
            if (trackingNumber.value == "") {
                alert(translations.noReceiptTrackingNumber)
            }
            if (referenceNumber.value == "") {
                alert(translations.noReceiptReferenceNumber)
            }
            if (shortDescription.value == "") {
                alert(translations.noReceiptDescription)
            }
            return
        }
        const receiptData = {}
        progress.value = true
        receiptData.ShortDescription = shortDescription.value
        receiptData.Method = method.value
        receiptData.TrackingNumber = trackingNumber.value
        receiptData.ReferenceNumber = referenceNumber.value
        receiptData.SubmitterPersonGuid = order.personGuid
        receiptData.OrderGuid = order.guid
        receiptData.UtcDate = new Date().toISOString()
        receiptData.IsApproved = false
        receiptData.IsSeen = false

        post("/receipt/create", receiptData).then(res => {
            newReceipt.value = res.receipt
            uploadReceiptImage()
            isOpen.value = false
            progress.value = false
            window.location.reload()
        })

    })

    return <Modal
        isOpen={isOpen}
        class=" absolute top-1/2 -translate-y-1/2 end-1/2 -translate-x-1/2 overflow-hidden"
    >
        {
            progress.value &&
            <span class="absolute top-0 start-0 z-40 w-full h-full bg-white/90">
                <Loading class="absolute aspect-square inset-0 m-auto animate-spin w-20" />
            </span>
        }
        <div class="flex flex-col place-items-center w-full">
            <span class={label}>*{receiptForm.method}</span>
            <input
                class={field}
                type="text"
                onInput$={e => inputChangeHandler(method, e.target.value)}
            />
            <span class={label}>*{receiptForm.trackingNumber}</span>
            <input
                class={field}
                type="text"
                onInput$={e => inputChangeHandler(trackingNumber, e.target.value)}
            />
            <span class={label}>*{receiptForm.referenceNumber}</span>
            <input
                class={field}
                type="text"
                onInput$={e => inputChangeHandler(referenceNumber, e.target.value)}
            />
            <span class={label}>*{receiptForm.shortDescription}</span>
            <textarea
                class={`${field} resize-none`}
                rows="5"
                onInput$={e => inputChangeHandler(shortDescription, e.target.value)}
            />
        </div>
        <div class="flex flex-col gap-5">
            <input
                ref={fileInputRef}
                type="file"
                id="receipt-image"
            />
            {/* <span
                onClick$={e => handleFileSelection(e)}
            >
                sdfsdfsd
            </span> */}
            <button
                class="p-2 mt-5 border-2 border-gray-300 bg-custom-color1 hover:bg-white text-center rounded w-28 rounded"
                type="button"
                onClick$={handleSubmit}
            >
                {receiptForm.saveButton}
            </button>
        </div>
    </Modal>
})

export default ReceiptForm
