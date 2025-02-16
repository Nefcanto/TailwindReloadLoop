import {
    AddressInfo,
    PackageDetails,
    PackageItems,
} from "Sales"

const PackageLayout = ({
    localePathPrefix,
    orderReceivedStatics,
    packageItem,
}) => {

    return <>
        <PackageDetails
            packageItem={packageItem}
            statics={orderReceivedStatics}
        />
        <PackageItems
            localePathPrefix={localePathPrefix}
            packageItem={packageItem.relatedItems?.order}
            statics={orderReceivedStatics}
        />
        <AddressInfo
            packageItem={packageItem}
            statics={orderReceivedStatics}
        />
    </>
}

export default PackageLayout
