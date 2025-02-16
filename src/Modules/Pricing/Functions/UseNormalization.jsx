const useNormalization = ({
    amount,
    subUnit,
    unitPerSuperUnit,
}) => {

    if (unitPerSuperUnit) {
        return amount / unitPerSuperUnit
    }

    return amount
}

export default useNormalization
