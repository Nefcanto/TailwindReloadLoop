const UseWhatsAppCallUrl = phone => {
    let normalizedPhone = phone
    if (!normalizedPhone) {
        return "#"
    }
    if (normalizedPhone.startsWith("+")) {
        throw error("todo: R&D for international phone number format")
    }
    if (normalizedPhone.startsWith("0")) {
        normalizedPhone = parseInt(normalizedPhone, 10)
    }
    return `https://wa.me/${normalizedPhone}`
}

export default UseWhatsAppCallUrl
