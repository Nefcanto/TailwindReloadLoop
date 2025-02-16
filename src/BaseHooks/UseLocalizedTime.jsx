const useLocalizedTime = ({
    localeKey,
    localesEnum,
    options,
    utcDate,
}) => {
    if (!utcDate) {
        return ""
    }

    const normalizedValue =
        (utcDate && utcDate?.toString()?.endsWith("Z"))
            ? utcDate :
            (utcDate + "Z")

    if (localeKey?.toLowerCase() === localesEnum?.fa?.toLowerCase()) {
        return new Date(normalizedValue)?.toLocaleTimeString("fa-IR",
            {
                ...options,
                timeZone: "Asia/Tehran"
            }
        )
    }

    return new Date(normalizedValue)?.toLocaleTimeString("en-US")
}

export default useLocalizedTime
