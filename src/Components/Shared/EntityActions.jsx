import { merge } from "Base"
import {
    CartButton,
    Price,
} from "Shared"
import { ShoppingCart } from "Svg"

const EntityActions = ({
    cartButtonLink,
    cartButtonTitle,
    entity,
    quickView,
}) => {

    return <>
        <div class="flex flex-col lg:flex-row items-center lg:justify-between gap-x-2.5 gap-y-4 border-t border-custom-color21 pt-2.5">
            <Price
                class={quickView ?? "ps-2.5 sm:ps-5"}
                currencyUnitClass="text-custom-color31"
                priceClass="text-custom-color31"
                entity={entity}
            />
            <div class={merge("flex flex-wrap justify-center items-center gap-2.5", quickView ?? " pe-2.5 sm:pe-5")}>
                {
                    <a
                        class="w-fit flex flex-row items-center"
                        href={cartButtonLink}
                    >
                        <CartButton
                            icon={<ShoppingCart class="w-6 aspect-square fill-custom-color22" />}
                            iconContainer="rounded w-10"
                            title={cartButtonTitle}
                            titleClass="rounded pe-9 py-2.5"
                        />
                    </a>
                }
            </div>
        </div>
    </>
}

export default EntityActions
