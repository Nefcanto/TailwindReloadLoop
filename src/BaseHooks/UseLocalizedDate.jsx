const useLocalizedDate = ({
    localeKey,
    localesEnum,
    options,
    textualMonth,
    textualWeek,
    utcDate,
}) => {

    const DateOptions = {
        year: "numeric",
        month: textualMonth ? "long" : "numeric",
        ...(textualWeek
            &&
            { week: "long" }),
        day: "numeric",
        ...options
    }

    if (!utcDate) {
        return ""
    }
    let normalizedValue =
        (utcDate && utcDate?.toString()?.endsWith("Z"))
            ? utcDate :
            (utcDate + "Z")

    if (localeKey?.toLowerCase() === localesEnum?.fa?.toLowerCase()) {
        return new Date(normalizedValue)?.toLocaleDateString("fa-IR",
            {
                ...DateOptions,
                timeZone: "Asia/Tehran"
            }
        )
    }

    return new Date(normalizedValue)?.toLocaleDateString("en-US")
}

export default useLocalizedDate
