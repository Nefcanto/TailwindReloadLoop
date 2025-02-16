import {
    $,
    useSignal,
    useStore,
    useVisibleTask$,
} from "@builder.io/qwik"
import { postWithAuthentication } from "Base"
import { useSession } from "Accounts"

const useCheckout = ({
    paymentOnly
}) => {

    const progress = useSignal(false)
    const session = useSession()
    const isValid = useSignal(false)
    const model = useStore({
        address: null,
        gateway: null,
        paymentMethod: null,
        shipmentMethod: null,
    })

    const handleSubmit = $(async () => {
        progress.value = true
        const modelRequest =
        {
            address: model?.address?.guid,
            gateway: model?.gateway?.key,
            paymentMethod: model?.paymentMethod?.key,
            shipmentMethod: model?.shipmentMethod?.key
        }
        const result = await postWithAuthentication("/sales/register", modelRequest, session)
        if (result.url && result.url != "") {
            window.location.href = result.url
        } else {
            alert("Error")
        }
        progress.value = false
    })

    const validationPayment = $(() => {
        if (model.paymentMethod && model.paymentMethod?.relatedItems?.keySegment != "online") {
            return true
        } else {
            if (model.gateway) {
                return true
            }
        }
        return false
    })

    const validationShipment = $(() => {
        if (model.address && model.shipmentMethod) {
            return true
        }

        return false
    })

    useVisibleTask$(async ({ track }) => {
        track(() => [
            model.address,
            model.gateway,
            model.paymentMethod,
            model.shipmentMethod
        ])
        if (paymentOnly) {
            isValid.value = await validationPayment()
        } else {
            isValid.value = await validationPayment() && await validationShipment()
        }
    })

    return {
        handleSubmit,
        isValid,
        model,
        progress,
    }
}

export default useCheckout
