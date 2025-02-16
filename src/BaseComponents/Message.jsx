import { component$ } from "@builder.io/qwik"

const Message = component$(({
    isOpen,
    isSuccess,
    message,
}) => {
    const jsx = <>
        <div class={`fixed z-50 top-10 mx-auto start-5 end-5 sm:start-10 sm:end-auto flex gap-1 items-center text-sm border rounded-lg px-5 py-4 shadow-lg ${isSuccess ? " bg-green-50 text-green-700 border-green-200 " : " bg-red-50 text-red-700 border-red-100"}`}>
            {message}
        </div>
    </>
    return isOpen ? jsx : null
})

export default Message
