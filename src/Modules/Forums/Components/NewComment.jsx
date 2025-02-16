const NewComment = ({
    commentAlert,
    sendComment,
}) => {

    return <div id="NewComment">
        <p class="pt-6 border-b pb-3 mb-4 text-xl font-bold">{sendComment}</p>
        <textarea
            class="w-full border rounded-2xl bg-gray-10"
            rows="10"></textarea>
        <p class="text-gray-500">
            {commentAlert}
        </p>
        <div class="text-end">
            <div class="inline-block mt-4 px-6 pt-1 pb-1.5 rounded-2xl bg-custom-color1 text-custom-color2 cursor-pointer">
                {sendComment}
            </div>
        </div>
    </div>
}

export default NewComment
