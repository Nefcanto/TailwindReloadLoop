import { component$ } from "@builder.io/qwik"
import {
    NewProfile,
    loadProfile,
} from "Contacts"

const Index = component$(() => {

    const {
        globalization,
        personInfo,
        profileStatics,
        session,
    } = loadProfile().value
    return <NewProfile
        personInfo={personInfo}
        profileStatics={profileStatics}
        session={session}
        {...globalization}
    />
})

export default Index

export { loadProfile }
