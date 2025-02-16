import { useLocalizedDate } from "Base"

const SubscriptionList = ({
    currentLocale,
    localesEnum,
    subscriptions,
}) => {
    return <div class="flex flex-col">
        <div class="py-2 sm:px-6 lg:px-8">
            <table class="min-w-full text-center text-sm ">
                <thead class="border-b border-neutral-200 bg-slate-200">
                    <tr>
                        <th class="px-6 py-4">#</th>
                        <th class="px-6 py-4">Start</th>
                        <th class="px-6 py-4">End</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subscriptions?.data?.map((item, index) => <tr
                            key={item.id}
                            class="border-b border-neutral-200 transition-all hover:bg-gray-300"
                        >
                            <td class="whitespace-nowrap px-6 py-4">{index + 1}</td>
                            <td class="whitespace-nowrap px-6 py-4">
                                {useLocalizedDate({
                                    localeKey: currentLocale?.key,
                                    localesEnum,
                                    utcDate: item.startUtcDate,
                                })}</td>
                            <td class="whitespace-nowrap px-6 py-4">
                                {
                                    useLocalizedDate({
                                        localeKey: currentLocale?.key,
                                        localesEnum,
                                        utcDate: item.endUtcDate,
                                    })
                                }
                            </td>
                        </tr>
                        )
                    }

                </tbody>
            </table>
        </div>

    </div>
}

export default SubscriptionList
