const tokenize = text => {
    if (!text) {
        return []
    }
    return text
        .split(/(?=[A-Z])/)
        .join(' ')
        .split(/[\W_]+/)
        .filter(token => token !== '')
}

export default tokenize
