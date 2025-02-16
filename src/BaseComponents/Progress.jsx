import { merge } from "Base"

const Progress = ({
    class: internalClass,
}) => {
    return <div className={merge(internalClass, "flex space-x-1 justify-center")}>
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0ms]"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:150ms]"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:300ms]"></span>
    </div>
}

export default Progress
