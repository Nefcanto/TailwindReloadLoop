import {
    Chat,
    Form,
    useQuestionUrl,
} from "Questions"
import { RichText } from "Shared"

const Main = ({
    fields,
    form,
    localePathPrefix,
    questions,
    questionsTexts,
    translations,
}) => {

    return <>
        <div class="lg:w-[calc(100%-36vw)] xl:w-[calc(100%-26vw)]">
            {questions?.data?.length > 0 &&
                <div class="mb-0 lg:mb-10">
                    {questions?.data?.map(item => <div
                        class="border-b py-10 grid grid-cols-1 gap-4 bg-white mx-1.5 group"
                        key={item.id}
                    >
                        <strong class="font-bold lg:text-md line-clamp-3">
                            {item?.title}
                        </strong>
                        <RichText content={item?.relatedItems?.content} />
                        <div class="flex justify-end items-center">
                            <a
                                class="flex gap-2 px-6 py-3 rounded-lg bg-custom-color1 text-custom-color2 text-sm hover:bg-custom-color2 hover:text-custom-color1 outline:none transition-all"
                                href={useQuestionUrl(item?.slug, localePathPrefix)}
                            >
                                <Chat class="w-5 aspect-square fill-white" />
                                {questionsTexts?.seeAnswers}
                            </a>
                        </div>
                    </div >
                    )}
                </div>
            }
            <Form
                {...fields}
                {...translations}
                class="hidden lg:flex"
                form={form}
            />
        </div>
    </>
}

export default Main
