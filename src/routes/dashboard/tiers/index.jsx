import {
    $,
    component$,
} from "@builder.io/qwik"
import { useOrders } from "Orders"
import {
    Close,
    loadTiers,
    Ok,
} from "Subscriptions"

const Index = component$(() => {

    const { tiers } = loadTiers().value
    const { addItem } = useOrders()
    const handelClick = $(async entity => {
        const { cart } = await addItem(entity, entity.relatedItems.entityType, 1)
        if (cart.order) {
            window.location.href = "/checkout/payment"
        }
    })

    return <div class="p-5 grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
        {
            tiers?.map(tier => <div
                key={tier.id}
                class="px-5 py-2 rounded-md bg-white transition-all delay-100 hover:shadow-md hover:bg-custom-color1/10 border-t-4 border-custom-color1 cursor-pointer"
                onClick$={$(() => handelClick(tier))}
            >
                <p class="font-bold text-xl"> {tier.title}</p>
                <p class="text-xs text-slate-400 mb-3">{tier.subtitle}</p>
                <div class="flex gap-2 justify-center">
                    <span>{tier.pricingPriceAmount?.toLocaleString()}</span>
                    <span class="text-slate-400">
                        {tier.currenciesCurrencySuperUnitName ?? tier.currenciesCurrencyName}
                    </span>
                </div>
                <p class="text-lg my-1">{tier.pricingIntervalTitle}</p>
                <div>
                    {
                        tier.relatedItems?.attributes?.map(attribute => <div
                            key={attribute.id}
                            class="flex item-center gap-2 py-1"
                        >
                            <div>
                                {
                                    attribute.value == "True" ?
                                        <Ok class="fill-green-400 w-5" /> :
                                        <Close class="fill-red-400 w-5" />
                                }

                            </div>
                            <div>{attribute.attributesAttributeTitle}</div>
                        </div>)
                    }
                </div>
            </div>)
        }
    </div>
})

export default Index

export { loadTiers }
