import { Rating as BaseRating } from "Social"
import { Star } from "Svg"

const Rating = ({
    class: internalClass,
    guid,
    ratingAverage,
    relatedItems,
}) => {
    return <div class={internalClass}>
        {
            ratingAverage && <p class="pt-0.5">
                {relatedItems?.ratingAverage?.value}
            </p>
        }
        <BaseRating
            activeClass="fill-custom-color1"
            containerClass="sm:w-fit text-center"
            containerIconsClass="fill-custom-color22/40"
            entityGuid={guid}
            entityType={relatedItems?.entityType}
            icon={Star}
            inactiveClass="fill-custom-color22/40"
            once
            starClass="w-5 lg:w-6"
            value={relatedItems?.ratingAverage?.value}
        />
    </div>
}

export default Rating
