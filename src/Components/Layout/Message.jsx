const Message = ({
    isMessageShown,
    messageDescription,
    messageType,
    text,
}) => {

    const color = () => {
        switch (messageType) {
            case "success": return "bg-green-50 text-green-700 border-green-200"
            case "info": return "bg-blue-50 text-blue-700 border-blue-200"
            case "warning": return "bg-yellow-50 text-yellow-700 border-yellow-200"
            case "error": return "bg-red-50 text-red-700 border-red-200"
            default: return "bg-green-50 text-green-700 border-green-200"
        }
    }

    return isMessageShown && <>
        <div class={`fixed z-50 top-5 mx-auto start-5 end-5 sm:start-10 sm:end-auto flex gap-1 items-center text-sm border rounded-lg px-5 py-4 shadow-lg ${color()}`}>
            {text}
            {
                messageDescription && <p class="pt-5">
                    {messageDescription}
                </p>
            }
        </div>
    </>
}

export default Message
