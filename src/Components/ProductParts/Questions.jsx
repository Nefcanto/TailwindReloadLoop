import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import { useLocalizedDate } from "Base"
import { RichText } from "Shared"
import { QuestionForm } from "ProductParts"

const Questions = component$(({
    entityGuid,
    fields,
    form,
    moreQuestions,
    questions,
}) => {

    const defaultNumberSlice = 5
    const numberSlice = useSignal(defaultNumberSlice)

    return <div>
        <QuestionForm
            entityGuid={entityGuid}
            fields={fields}
            form={form}
        />
        <div>
            {
                questions?.slice(0, numberSlice.value).map(question => <div
                    class="border border-custom-color24 rounded-lg p-4 bg-custom-color2"
                    key={question.id}
                >
                    <div class="flex items-center gap-8">
                        <span class="text-lg">
                            {question.title}
                        </span>
                        <span class="text-sm">
                            {
                                useLocalizedDate({
                                    textualMonth: true,
                                    textualWeek: true,
                                    utcDate: question.creationUtcDate
                                })
                            }
                        </span>
                    </div>
                    <div class="ps-4 mt-4">
                        <RichText content={question?.relatedItems?.content?.content} />
                    </div>
                    {
                        question?.relatedItems?.answers.length > 0 &&
                        <div class="ms-8 px-4 border border-custom-color24 rounded-lg">
                            {
                                question?.relatedItems?.answers?.map(answer => <div
                                    class="border-b border-custom-color24 py-4"
                                    key={answer.id}
                                >
                                    <span class="text-xs">
                                        {answer.contactsPersonDisplayName || ""}
                                    </span>
                                    <RichText content={answer?.relatedItems?.content} />
                                </div>)
                            }
                        </div>
                    }
                </div>)
            }

            {
                questions.length > numberSlice.value && <button
                    class="text-blue-500 text-sm py-4"
                    onClick$={() => numberSlice.value = numberSlice.value + defaultNumberSlice}
                    type="button"
                >
                    {moreQuestions}
                </button>
            }
        </div>
    </div>
})

export default Questions
