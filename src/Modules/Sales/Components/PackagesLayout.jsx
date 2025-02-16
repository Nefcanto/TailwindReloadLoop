import {
    PackageItem,
    Title,
} from "Sales"

const PackagesLayout = ({
    dashboardStatics,
    orderReceivedStatics,
    packages,
    ...rest
}) => {

    return <section>
        <Title
            class="justify-center"
            title={dashboardStatics?.orders}
            titleClass="lg:ps-3"
        />
        <div class="flex flex-col gap-5 mx-2">
            {
                packages?.data?.map(item => <div key={item.id}>
                    <PackageItem
                        {...rest}
                        packageItem={item}
                        statics={orderReceivedStatics}
                    />
                </div>)
            }
        </div>
    </section>
}

export default PackagesLayout
