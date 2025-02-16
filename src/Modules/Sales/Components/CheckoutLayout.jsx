import { component$ } from "@builder.io/qwik"

import {
    Payment,
    Shipment,
    useCheckout,
} from "Sales"
const CheckoutLayout = component$(({
    factorStatics,
    cart,
    paymentOnly,
    shipmentOnly,
    ...rest
}) => {
    const {
        handleSubmit,
        isValid,
        model,
        progress,
    } = useCheckout({
        paymentOnly
    })

    return <>
        <section>
            <div class="max-w-7xl lg:max-w-5xl px-5 mx-auto mb-20 relative">
                <div class={`${progress.value ? "flex" : "hidden"} absolute flex justify-center items-center w-full h-full bg-slate-100/50`}>
                    <svg
                        viewBox="0 0 24 24"
                        class="w-10 h-10 md:w-20 md:h-20 animate-spin"
                    ><path d="M13.75 22c0 .966-.783 1.75-1.75 1.75s-1.75-.784-1.75-1.75.783-1.75 1.75-1.75 1.75.784 1.75 1.75zm-1.75-22c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 10.75c.689 0 1.249.561 1.249 1.25 0 .69-.56 1.25-1.249 1.25-.69 0-1.249-.559-1.249-1.25 0-.689.559-1.25 1.249-1.25zm-22 1.25c0 1.105.896 2 2 2s2-.895 2-2c0-1.104-.896-2-2-2s-2 .896-2 2zm19-8c.551 0 1 .449 1 1 0 .553-.449 1.002-1 1-.551 0-1-.447-1-.998 0-.553.449-1.002 1-1.002zm0 13.5c.828 0 1.5.672 1.5 1.5s-.672 1.501-1.502 1.5c-.826 0-1.498-.671-1.498-1.499 0-.829.672-1.501 1.5-1.501zm-14-14.5c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm0 14c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2z" /></svg>

                </div>

                <section class="flex flex-col lg:flex-row lg:items-start gap-10 gap-x-6 xl:gap-x-10 mt-10">
                    <div class="grow">
                        {!paymentOnly && <Shipment
                            {...rest}
                            packageModel={model}
                        />}
                        {!shipmentOnly && <Payment
                            {...rest}
                            packageModel={model}
                        />}
                    </div>
                    <div class="lg:w-[35%] min-w-[250px] border p-4">
                        <p class="text-base font-bold p-1 text-center">{factorStatics.title}</p>
                        <div class="bg-gray-200/60 p-3 py-4 mt-2">
                            <div class="flex justify-between mt-2">
                                <span class="text-sm">{factorStatics.sum}</span>
                                <span class="flex gap-0.5 items-center">
                                    <span class="text-sm">
                                        {cart.order?.monetaryValuesMonetaryValueQuantity?.toLocaleString()}
                                    </span>
                                    <span class="text-xs text-gray-400">
                                        {
                                            cart?.order?.currenciesCurrencySuperUnitName ?
                                                cart?.order?.currenciesCurrencySuperUnitName :
                                                cart?.order?.currenciesCurrencyName
                                        }
                                    </span>
                                </span>
                            </div>
                            {
                                model?.shipmentMethod && <div class="flex justify-between mt-2">
                                    <span class="text-sm">{factorStatics.shippingCost}</span>
                                    <span class="flex gap-0.5 items-center text-green-500 font-bold">
                                        <span class="text-sm">
                                            {model?.shipmentMethod?.monetaryValuesMonetaryValueQuantity?.toLocaleString()}
                                        </span>
                                        <span class="text-xs text-gray-400">
                                            {
                                                model?.shipmentMethod?.currenciesCurrencySuperUnitName ?
                                                    model?.shipmentMethod?.currenciesCurrencySuperUnitName :
                                                    model?.shipmentMethod?.currenciesCurrencyName
                                            }
                                        </span>
                                    </span>
                                </div>
                            }
                            <div class="flex justify-between mt-2">
                                <span class="text-sm">{factorStatics.final}</span>
                                <span class="flex gap-0.5 items-center text-green-500 font-bold">
                                    <span class="text-sm">
                                        {
                                            (cart.order?.monetaryValuesMonetaryValueQuantity + (model?.shipmentMethod?.monetaryValuesMonetaryValueQuantity ?? 0)).toLocaleString()

                                        }
                                    </span>
                                    <span class="text-xs text-gray-400">
                                        {
                                            cart?.order?.currenciesCurrencySuperUnitName ?
                                                cart?.order?.currenciesCurrencySuperUnitName :
                                                cart?.order?.currenciesCurrencyName
                                        }
                                    </span>
                                </span>
                            </div>
                        </div>
                        <button
                            class={`w-full p-2 flex justify-center text-white ${isValid.value ? "bg-green-400 hover:bg-green-500" : "bg-gray-400 hover:bg-gray-500"} duration-300 mt-5`}
                            onclick$={handleSubmit}
                            disabled={!isValid.value}
                        >
                            <span>{factorStatics.checkout}</span>

                        </button>
                    </div>
                </section>
            </div>
        </section>
    </>
})

export default CheckoutLayout
