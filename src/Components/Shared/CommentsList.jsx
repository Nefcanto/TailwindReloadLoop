const CommentsList = ({
    data,
    description,
    metadata,
}) => {

    return <>
        <div class="max-w-3xl mx-auto flex flex-col gap-4 mt-10">
            <div class="text-custom-color32 flex flex-wrap gap-2">
                <p>{metadata?.totalCount}</p>
                <p>{description}</p>
            </div>
            {
                data?.map(item => <>
                    <div
                        class="bg-gray-100 p-5 rounded-xl"
                        key={data.id}
                    >
                        <p class="mb-2 font-bold">{item?.name}</p>
                        <p>{item?.body}</p>
                    </div>
                </>)
            }

        </div>
    </>
}

export default CommentsList
