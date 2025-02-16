import {
    AddComment,
    Comments,
} from "ProductParts"
import { Rating } from "Shared"

const Reviews = ({
    comments,
    fields,
    form,
    product,
}) => {

    return <>
        <section class="w-full sm:max-w-[85%] lg:max-w-lg sm:mx-auto my-3 md:my-5">
            {comments?.metadata.hasData && <Comments {...comments} />}
            <div class="w-full flex flex-row items-start justify-between md:mt-4">
                <p class="font-bold text-lg">
                    {form?.title}
                </p>
                <Rating
                    {...product}
                    class="flex flex-row gap-1 lg:gap-1.5 ms-auto"
                    ratingAverage
                />
            </div>
            <AddComment
                entity={product}
                fields={fields}
                form={form}
                titleClass="hidden"
            />
        </section>
    </>
}

export default Reviews
