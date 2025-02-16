import {
    $,
    useSignal,
    useTask$,
} from "@builder.io/qwik"
import {
    useLocation,
} from "@builder.io/qwik-city"
import { isServer } from "@builder.io/qwik/build"
import {
    get,
    post,
} from "Base"

const useClickCount = ({ entity }) => {

    if (!entity) {
        throw new Error("Entity is null or undefined")
    }

    const count = useSignal(0)
    const location = useLocation()

    useTask$(async () => {
        if (isServer) {
            if (entity?.relatedItems?.clickCount) {
                count.value = entity?.relatedItems?.clickCount
            } else {
                await get(`/clickCount/get?module=${entity.relatedItems.module}&entityType=${entity.relatedItems.entityType}&entity=${entity.guid}`, location)
                    .then(data => {
                        console.log(data)
                        count.value = data
                    }, e => {
                        console.error(e)
                    })
            }
        }
    })

    const handleClick = $(async () => {
        await post(`/clickCount/increaseClickCount?module=${entity.relatedItems.module}&entityType=${entity.relatedItems.entityType}&entity=${entity.guid}`,
            {},
            location
        )
            .then(data => {
                count.value = data
            }, e => {
                console.log(e)
            })
    })

    return {
        count,
        handleClick,
    }
}

export default useClickCount
