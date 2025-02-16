import { component$ } from "@builder.io/qwik"
import {
    AddressesList,
    loadAddresses,
} from "Contacts"

const Index = component$(props => {

    const {
        addresses,
        addressStatics,
        session,
        globalization,
    } = loadAddresses().value

    return <AddressesList
        addresses={addresses}
        addressStatics={addressStatics}
        request={props}
        session={session}
        {...globalization}
    />
})

export default Index

export { loadAddresses }
