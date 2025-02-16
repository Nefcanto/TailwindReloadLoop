const toCamelCase = (str) => {

    return str.replace(/-./g, x => x[1].toUpperCase())
}

export default toCamelCase
