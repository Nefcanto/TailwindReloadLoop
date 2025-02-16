import { post } from "Base"

export const onPost = async requestEvent => {
    const body = await requestEvent.parseBody()
    await post("/zibal/verify", body).then(data => {
        throw requestEvent.redirect(301, `/iran-payment-result/${data?.id}`)
    }, e => {
    })
}


export const onGet = async requestEvent => {
    const body = await requestEvent.parseBody()
    const queryObject = Object.fromEntries(requestEvent.url.searchParams.entries());
    console.log(queryObject, "ssssssssss");

    await post("/zibal/verify", {
        ...body,
        ...queryObject
    }).then(data => {
        throw requestEvent.redirect(301, `/iran-payment-result/${data?.id}`)
    }, e => {
    })
}
