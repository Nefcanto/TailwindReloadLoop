import { post } from "Base"

export const onPost = async requestEvent => {
    const body = await requestEvent.parseBody()
    await post("/idpay/verify", body).then(data => {
        throw requestEvent.redirect(301, `/iran-payment-result/${data?.id}`)
    }, e => {
    })
}

