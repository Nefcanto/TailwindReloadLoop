import { SubscriptionList } from "Subscriptions"

const SubscriptionsLayout = ({
    subscriptionsStatics,
    ...rest
}) => {
    return <div>
        <SubscriptionList
            {...rest}
        />
    </div>
}

export default SubscriptionsLayout
