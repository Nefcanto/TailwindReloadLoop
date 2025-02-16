import { HeaderOffset } from "Layout"
import {
    Activities,
    Company,
    Slider
} from "CompanyParts"

const Layout = ({
    company,
    companyDetails
}) => {

    return <>
        <HeaderOffset />
        <Company
            details={company}
            members={companyDetails}
        />
        <Activities activities={company.relatedItems.activities} />
        <Slider images={company.relatedItems.images} />
    </>
}

export default Layout
