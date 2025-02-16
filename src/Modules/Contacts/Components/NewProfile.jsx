import { component$ } from "@builder.io/qwik"
import { LocalizedDate } from "Base"
import { EditProfile } from "Contacts"

const NewProfile = component$(({
    currentLocale,
    localesEnum,
    personInfo,
    profileStatics,
    ...rest
}) => {

    console.log(personInfo)
    const {
        juridicalPerson,
        naturalPerson,
        person,
    } = personInfo || {}
    let items = []

    if (person.isNatural) {
        items.push({
            name: "FirstName",
            title: profileStatics.firstName,
            value: naturalPerson?.firstName,
        })
        items.push({
            name: "LastName",
            title: profileStatics.lastName,
            value: naturalPerson?.lastName,
        })
    }
    if (person.isJuridical) {
        items.push({
            name: "Name",
            title: profileStatics.name,
            value: person?.displayName || "",

        })
    }
    items.push({
        name: "NationalIdentificationNumber",
        title: profileStatics.id,
        value: person?.nationalIdentificationNumber,

    })
    console.log(items, "Items Profile .......");

    return <div>
        <EditProfile
            person
            profileStatics={profileStatics}
        />
        <div class="w-full grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-4 [&>div]:gap-2 [&>div]:p-2 [&>div]:bg-[linear-gradient(0deg,#efefef_0,#efefef_49%,#f7f7f7_52%,#f7f7f7)] [&>div]:border [&>div]:flex [&>div]:flex-col [&>div]:items-start [&>div]:min-h-[80px] [&>div]:justify-start [&>div]:relative [&>div]:cursor-pointer">
            {
                items.map(item => <div key={item.name}>
                    <strong>
                        {item.title}
                    </strong>
                    {
                        item?.type === "date"
                            ?
                            <LocalizedDate
                                localesEnum={localesEnum}
                                utcDate={item.value}
                                localeKey={currentLocale.key}
                            />
                            :
                            <span>
                                {item.value}
                            </span>
                    }
                </div>)
            }
        </div>
    </div>
})

export default NewProfile
