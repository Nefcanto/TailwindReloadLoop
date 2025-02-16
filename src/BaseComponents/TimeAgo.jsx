import {
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"

const TimeAgo = component$(({
    localeKey,
    localesEnum,
    utcDate,
}) => {

    const finalTime = useSignal("لحظاتی")

    useVisibleTask$(() => {

        let normalizedValue =
            (utcDate && utcDate?.toString()?.endsWith("Z"))
                ? utcDate :
                (utcDate + "Z")


        const timeZone = localeKey?.toLowerCase() === localesEnum?.fa?.toLowerCase() ? "Asia/Tehran" : "America/New_York"

        const convertedTimeZoneDate = new Date(normalizedValue.toLocaleString("en-US", {
            timeZone: timeZone
        }))

        let secondsTime = Math.floor((new Date() - convertedTimeZoneDate) / 1000)
        const minuteSeconds = 60
        const hourMinutes = 60
        const dayHours = 24
        const mountDays = 30
        const yearMounts = 12

        let Time = secondsTime / (minuteSeconds * hourMinutes * dayHours * mountDays * yearMounts)

        if (Time > 1) {
            finalTime.value = (Math.floor(Time) + " سال")
            return
        }
        Time = secondsTime / (minuteSeconds * hourMinutes * dayHours * yearMounts)
        if (Time > 1) {
            finalTime.value = (Math.floor(Time) + " ماه")
            return
        }
        Time = secondsTime / (minuteSeconds * hourMinutes * dayHours)
        if (Time > 1) {
            finalTime.value = (Math.floor(Time) + " روز")
            return
        }
        Time = secondsTime / (minuteSeconds * hourMinutes)
        if (Time > 1) {
            finalTime.value = (Math.floor(Time) + " ساعت")
            return
        }
        Time = secondsTime / minuteSeconds
        if (Time > 1) {
            finalTime.value = (Math.floor(Time) + "  دقیقه")
            return
        }
        if (Time > 1) {
            finalTime.value = (Math.floor(Time) + "  ثانیه")
            return
        }

    }, { strategy: "document-ready" })

    return <span class="flex gap-1">
        <span>
            {finalTime.value}
        </span>
        <span>
            پیش
        </span>
    </span>

})

export default TimeAgo
