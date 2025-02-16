import { Chat } from "Questions"
import { RichText } from "Shared"

const Answers = ({
    expertsAnswer,
    question,
}) => {

    return <>
        {question?.relatedItems?.answer.length > 0 &&
            <>
                <div class="flex gap-2 font-bold text-lg mt-10 px-5 md:px-20">
                    <Chat class="w-5 aspect-square fill-custom-color1" />
                    <span>
                        {expertsAnswer}
                    </span>
                </div>

                <div class="flex flex-col gap-6 mt-6 mb-0 md:mt-5 md:mb-12 md:px-20">
                    {
                        question?.relatedItems?.answer?.map(item => <>
                            <div
                                class="bg-green-50 rounded-lg p-5 grid grid-cols-1 gap-2 mx-1.5"
                                key={item.id}
                            >
                                <strong class="font-bold text-lg">
                                    {item?.naturalPersonName}
                                </strong>
                                <RichText content={item?.relatedItems?.content} />
                            </div>
                        </>)
                    }
                </div>
            </>
        }
    </>
}

export default Answers
