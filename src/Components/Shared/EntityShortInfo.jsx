import { merge } from "Base"
import {
    useCategoryUrl,
    useTagUrl,
} from "Products"
import {
    EntityActions,
    EntityAttributes,
    Taxonomy,
} from "Shared"
import { Star } from "Svg"

const EntityShortInfo = ({
    categoriesTitle,
    localePathPrefix,
    orderPhone,
    entity,
    quickView,
    tagsTitle,
    ...rest
}) => {

    return <>
        <section class={merge("flex flex-col", quickView ?? "col-span-1 lg:col-span-7 py-2.5 sm:py-5 border-2 border-custom-color1 shadow-[0_0_2.5rem_0_rgba(0,0,0,.149)] rounded-lg")}>
            <div class={merge("flex flex-row items-start gap-1.5 sm:gap-2 lg:gap-2.5", quickView ?? "px-2.5 sm:px-5")}>
                {
                    quickView ?? <h1 class="font-black text-lg">
                        {entity?.title}
                    </h1>
                }
                {
                    entity.relatedItems?.ratingAverage?.value && !quickView && <>
                        <div class="w-fit flex flex-1 flex-row items-center justify-end gap-0.5 ms-auto z-10 select-none">
                            <p class="text-custom-color2 items-end">
                                {entity.relatedItems?.ratingAverage?.value}
                            </p>
                            <Star class="w-5 h-auto fill-yellow-500 aspect-square" />
                        </div>
                    </>
                }
            </div>
            {
                entity?.summary && <p class={merge("text-lg text-custom-color2/95 pt-1 pb-2.5 text-start", quickView ?? "px-5 sm:px-8")} >
                    {entity?.summary}
                </p>
            }
            <div class={merge("flex flex-col gap-2.5 pt-2.5 pb-5", quickView ?? "px-2.5 sm:px-5")} >
                <Taxonomy
                    getUrl={useCategoryUrl}
                    hasItems={entity?.relatedItems?.hasCategories}
                    items={entity?.relatedItems?.categories}
                    localePathPrefix={localePathPrefix}
                    title={categoriesTitle}
                />
                <Taxonomy
                    getUrl={useTagUrl}
                    hasItems={entity?.relatedItems?.hasTags}
                    items={entity?.relatedItems?.tags}
                    localePathPrefix={localePathPrefix}
                    title={tagsTitle}
                />
            </div>
            <div class={merge("pt-2.5 pb-5", quickView ?? "px-2.5 sm:px-5")} >
                <EntityAttributes
                    {...entity.relatedItems}
                    {...rest}
                    isCompact
                />
            </div>
            <EntityActions
                {...rest}
                cartButtonLink={`tel:${orderPhone}`}
                entity={entity}
                localePathPrefix={localePathPrefix}
                quickView={quickView}
            />
        </section>
    </>
}

export default EntityShortInfo
