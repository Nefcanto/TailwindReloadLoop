import {
    AddComment,
    Answers,
    Comments,
    Heading,
    Qa,
} from "Questions"

const QuestionLayout = ({
    comments,
    content,
    currentLocale,
    fields,
    form,
    localePathPrefix,
    question,
    questionsTexts,
    translations,
}) => {

    return <>

        <section>

            <Heading title={question?.relatedItems?.hierarchies?.[0]?.title} />

            <div class="max-w-7xl mx-auto px-5">

                <div class="flex justify-end">
                    <a
                        class="font-bold px-6 py-3 rounded-md bg-custom-color1 text-custom-color2 hover:bg-custom-color2 hover:text-custom-color1 outline:none transition-all"
                        href={`${localePathPrefix}/questions#newQuestion`}
                    >
                        {questionsTexts?.askQuestion}
                    </a>
                </div>

                <Qa
                    content={content}
                    title={question?.title}
                />

                <Answers
                    {...questionsTexts}
                    question={question}
                />

                <Comments
                    {...questionsTexts}
                    comments={comments}
                    currentLocale={currentLocale}
                />

                <AddComment
                    {...fields}
                    {...form}
                    {...translations}
                    entity={question}
                />

            </div>

        </section>
    </>
}

export default QuestionLayout
