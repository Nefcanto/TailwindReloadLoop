import { merge } from "Base"
import { AddComment as BaseAddComment } from "Social"

const AddComment = ({
    entity,
    fields,
    form,
    titleClass,
}) => {
    return <>
        <BaseAddComment
            {...fields}
            {...form}
            buttonClass="bg-custom-color1 border-2 border-custom-color1 hover:bg-white text-custom-color2 hover:text-custom-color2 lg:text-xl"
            containerClass="w-full md:mt-5 mb-0 md:mb-0"
            entity={entity}
            titleClass={merge("font-semibold text-custom-color21 lg:text-lg", titleClass)}
        />
    </>
}

export default AddComment
