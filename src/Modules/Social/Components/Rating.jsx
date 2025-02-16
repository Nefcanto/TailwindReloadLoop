import {
    $,
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import {
    post,
    Star,
} from "Base"
import { useSession } from "Accounts"

const Rating = component$(({
    activeClass,
    containerClass,
    containerIconsClass,
    duplicateMessage,
    entity,
    failMessage,
    icon,
    inactiveClass,
    once,
    readOnly,
    starClass,
    successMessage,
    value,
}) => {

    if (!entity) {
        return null
        throw new Error("Entity is null or undefined")
    }

    const session = useSession()
    const rate = useSignal(value ?? 0)
    const isOpenModal = useSignal(false)
    const message = useSignal("")
    const isSuccess = useSignal(false)

    const Icon = icon

    const clickHandler = $(givenRate => {

        isOpenModal.value = false
        if (!readOnly) {
            const oldRatings = JSON.parse(localStorage.getItem(entity.relatedItems.entityType)) ?? []
            if (once && oldRatings?.includes(entity.guid)) {

                isOpenModal.value = true
                message.value = duplicateMessage ?? "Your rate is duplicated"
            } else {

                if (session.value && session.value?.user?.guid) {

                    post(`/rating/rate?module=${entity.relatedItems.module}&entityType=${entity.relatedItems.entityType}&entity=${entity.guid}`, {
                        userGuid: session.value.user.guid,
                        value: givenRate
                    }).then(data => {
                        rate.value = data.average.value
                        localStorage.setItem(entity.relatedItems.entityType, JSON.stringify([...oldRatings, entity.guid]))
                        isOpenModal.value = true
                        isSuccess.value = true
                        message.value = successMessage ?? "Your rate has been successfully sent"
                    }).catch(er => {
                        isOpenModal.value = true
                        isSuccess.value = false
                        message.value = failMessage ?? "An error has occurred"
                    })
                } else {

                    post(`/rating/rate?module=${entity.relatedItems.module}&entityType=${entity.relatedItems.entityType}&entity=${entity.guid}`, {
                        userGuid: "00000000-0000-0000-0000-000000000000",
                        value: givenRate
                    }).then(data => {
                        rate.value = data.average.value
                        localStorage.setItem(entity.relatedItems.entityType, JSON.stringify([...oldRatings, entity.guid]))
                        isOpenModal.value = true
                        isSuccess.value = true
                        message.value = successMessage ?? "Your rate has been successfully sent"
                    }).catch(er => {
                        isOpenModal.value = true
                        isSuccess.value = false
                        message.value = failMessage ?? "An error has occurred"

                    })
                }
            }
        }
    })

    const hoverHandler = $(newRate => {
        if (!readOnly) {

            rate.value = newRate
        }
    })

    const startCount = 5
    const starActiveColor = activeClass || "fill-yellow-500 stroke-yellow-500"
    const starInactiveColor = inactiveClass || "fill-white stroke-black/50"
    const defaultClass = starClass === undefined ? "w-6" : starClass?.indexOf("w-") > -1 ? starClass : "w-6" + starClass

    useVisibleTask$(({
        cleanup,
        track
    }) => {
        track(() => isOpenModal.value)
        const id = setTimeout(() => message.value = "", 1000)
        cleanup(() => clearTimeout(id))
    })

    return <div class={containerClass}>
        <div
            onMouseLeave$={() => rate.value = value || 0}
            dir="ltr"
            class={`${containerIconsClass} w-fit flex items-center justify-center text-lg`}
        >
            {[...Array(startCount)].map((_, index) => {
                const givenRating = index + 1
                return <label key={index}>
                    <input
                        type="radio"
                        class="hidden"
                        value={value}
                        onInput$={() => clickHandler(givenRating)}
                    />
                    <div
                        class={`${readOnly ? "" : "cursor-pointer"}`}
                        onMouseOver$={() => hoverHandler(givenRating)}
                    >
                        {
                            Icon ?
                                <Icon
                                    class={`${index < rate.value && starActiveColor} ${givenRating < rate.value || givenRating === rate.value
                                        ? starActiveColor
                                        : starInactiveColor} ${defaultClass}`}
                                />
                                :
                                <Star
                                    class={`${index < rate.value && starActiveColor} ${givenRating < rate.value || givenRating === rate.value
                                        ? starActiveColor
                                        : starInactiveColor} ${defaultClass}`}
                                />
                        }
                    </div>
                </label>

            })}
        </div>
        {message.value !== "" && <div class={`fixed z-50 top-10 start-10 flex gap-1 items-center text-sm border rounded-lg px-5 py-4 shadow-lg ${isSuccess.value ? " bg-green-50 text-green-700 border-green-200 " : " bg-red-50 text-red-700 border-red-100"}`}>
            {/* {isSuccess ? <Checked class="w-4 aspect-square" /> : <Close class="w-4 aspect-square" />} */}
            {message.value}
        </div>}
    </div >
})

export default Rating
