import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { LocalizedDate } from "Base"
import { Edit as EditIcon } from "Base"
import {
    CancelEdit,
    EditBirthday,
    EditEmail,
    EditIdentificationNumber,
    EditName,
    EditPhone,
} from "Contacts"

const Profile = component$(({
    currentLocale,
    localesEnum,
    personInfo,
    profileStatics,
    ...rest
}) => {
    const {
        defaultEmail,
        defaultPhone,
        emails,
        juridicalPersonInfo,
        milliseconds,
        naturalInfo,
        person,
        phones,
        user,
    } = personInfo

    const editPartName = useSignal()

    const items = [
        {
            name: "Name",
            title: profileStatics.name,
            value: person?.displayName || "",
            Component: EditName
        },
        {
            name: "Email",
            title: profileStatics.email,
            value: defaultEmail,
            Component: EditEmail
        },
        {
            name: "Phone",
            title: profileStatics.phone,
            value: defaultPhone,
            Component: EditPhone

        },
        {
            name: "NationalIdentificationNumber",
            title: profileStatics.id,
            value: person?.nationalIdentificationNumber,
            Component: EditIdentificationNumber
        },
        {
            name: "Birthday",
            title: profileStatics.birthday,
            value: naturalInfo?.birthUtcDate,
            Component: EditBirthday,
            type: "date"
        }

    ]

    const editHandler = $(name => {

        console.log(name, "sssssss");

        editPartName.value = name

    })

    return <div class="w-full grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-4 [&>div]:gap-2 [&>div]:p-2 [&>div]:bg-[linear-gradient(0deg,#efefef_0,#efefef_49%,#f7f7f7_52%,#f7f7f7)] [&>div]:border [&>div]:flex [&>div]:flex-col [&>div]:items-start [&>div]:min-h-[80px] [&>div]:justify-start [&>div]:relative [&>div]:cursor-pointer">
        {
            items.map(item => {

                let EditComponent = item.Component

                return <div key={item.name}>
                    {
                        editPartName.value == item.name
                            ?
                            <>
                                <strong>
                                    {item.title}
                                </strong>
                                <EditComponent
                                    item={item}
                                    profileStatics={profileStatics}
                                    cancel={$(() => editHandler(""))}
                                    {...rest} />
                                {/* <CancelEdit /> */}
                            </>
                            :
                            <>
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
                                <div
                                    onClick$={$(() => {
                                        editHandler(item.name)
                                    })}
                                    class="absolute w-full h-full to-0 start-0 z-20">
                                </div>
                                <EditIcon class="w-4 h-4 fill-green-500 absolute top-2 end-2 z-10" />
                            </>
                    }
                </div>
            }
            )}
    </div >
})

export default Profile
