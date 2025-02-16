import { merge } from "Base"

const Container = ({
    children,
    class: internalClass,
}) => {
    return <div class={merge("lg:container mx-auto w-full px-1.5 md:px-5", internalClass)}>
        {children}
    </div>
}

export default Container
