import { component$ } from "@builder.io/qwik"

const PaymentResultLayout = component$(({
    transaction
}) => {
    return <div class="flex justify-center">
        <h1 class={`${transaction.isSuccess ? "text-green-500" : "text-red-500"}`}>
            {transaction?.bankState}
        </h1>
    </div>
})

export default PaymentResultLayout
