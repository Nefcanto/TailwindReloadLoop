const Duration = ({
    seconds
}) => {

    const durationInSecond = seconds || 0
    const minutesPart = `${Math.floor(durationInSecond / 60)}`.padStart(2, "0")
    const secondsPart = `${durationInSecond - minutesPart * 60}`.padStart(2, "0")

    return <span>
        {`${minutesPart}:${secondsPart}`}
    </span>
}

export default Duration
