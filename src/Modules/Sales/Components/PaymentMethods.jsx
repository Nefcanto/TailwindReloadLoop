import { component$ } from "@builder.io/qwik"

const PaymentMethods = component$(({
    packageModel,
    paymentMethods,
    paymentStatics,
}) => {

    return <>
        <div class="mt-8">
            <div class="flex items-center gap-1">
                <div class="w-4 aspect-square bg-custom-color9"></div>
                <p class="text-base font-bolder">{paymentStatics.paymentTitle}</p>
            </div>
            <div class="border p-4 mt-6">
                <div class="flex flex-col md:flex-row flew-wrap gap-4">
                    {
                        paymentMethods?.map(paymentMethod => <div
                            key={paymentMethod.id}
                            class="border p-4"
                        >
                            <label class="text-sm font-bold text-gray-900 block flex items-start gap-2">
                                <input
                                    class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                    name="paymentMethod"
                                    type="radio"
                                    onInput$={e => {
                                        packageModel.paymentMethod = paymentMethod
                                    }}
                                />
                                <span class="font-bold">
                                    {paymentMethod.title}
                                </span>

                            </label>
                        </div>
                        )}
                </div>
            </div>
        </div>
    </>

})

export default PaymentMethods
