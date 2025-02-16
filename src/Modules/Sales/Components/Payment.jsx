import {
    Gateways,
    PaymentMethods,
} from "Sales"

const Payment = props => {

    return <>
        <PaymentMethods {...props} />
        <Gateways {...props} />
    </>
}

export default Payment
