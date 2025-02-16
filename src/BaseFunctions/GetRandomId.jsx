const getRandomId = () => {
    return Math.random().toString(36).replace(/[^a-z]+/g, "")
}

export default getRandomId
