import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { merge } from "Base"
import {
    EntityAttributes,
    RichText,
    TabOption,
} from "Shared"
import {
    MobileTabs,
    Questions,
    Reviews,
} from "ProductParts"
import {
    Chat,
    Clipboard,
    Document,
    Question,
} from "Svg"

const Tabs = component$(({
    content,
    product,
    productStatics,
    questionForm,
    questions,
    variantContent,
    ...rest
}) => {

    const svgStyle = "w-6 aspect-square fill-custom-color2"
    const tabs = [
        {
            name: "specification",
            isActive: product?.relatedItems?.hasEntityAttributes,
            svg: <Clipboard class={svgStyle} />,
            component: <EntityAttributes
                {...product.relatedItems}
                {...productStatics}
            />
        },
        {
            name: "details",
            isActive: variantContent || (content && JSON.parse(content).length > 1),
            svg: <Document class={svgStyle} />,
            component: <article>
                <RichText
                    class="w-fit"
                    content={variantContent ?? content}
                    p="leading-loose trucks-normal break-words"
                />
            </article>
        },
        {
            name: "reviews",
            isActive: true,
            svg: <Chat class={svgStyle} />,
            component: <Reviews
                {...rest}
                product={product}
            />
        },
        {
            name: "askQuestion",
            isActive: true,
            svg: <Question class={svgStyle} />,
            component: <Questions
                {...productStatics}
                {...questionForm}
                entityGuid={product.guid}
                questions={questions}
            />
        },
    ]
    const firstTab = tabs.find(tab => tab.isActive)
    const activeTabName = useSignal(firstTab?.name)
    const isModalOpen = useSignal(false)
    const handleTabClick = $(name => {
        activeTabName.value = name
        isModalOpen.value = true
    })
    const isTabOdd = tabs?.filter(t => t.isActive).length % 2 != 0

    return firstTab && <>
        <div class="hidden md:block max-w-7xl py-8 px-3 2xl:px-0 mx-auto">
            <nav>
                <ul class="group mt-6 flex border-custom-color1 relative">
                    {
                        tabs.map(tab => tab.isActive && <TabOption
                            click={handleTabClick}
                            key={tab.id}
                            name={tab.name}
                            selected={activeTabName?.value == tab.name}
                        >
                            <div class="flex flex-row items-center gap-0.5 sm:gap-2">
                                {activeTabName?.value == tab.name && tab.svg}
                                <p>
                                    {productStatics?.[tab.name]}
                                </p>
                            </div>
                        </TabOption>)
                    }
                </ul>
            </nav>
            <div class={merge("bg-custom-color23 p-5 rounded-lg border-2 border-custom-color1 shadow-[0_2rem_2.5rem_-2px_rgba(0,0,0,0.149)] shadow-t-0", firstTab.name == activeTabName?.value && "rounded-ss-none")}>
                {tabs.find(tab => tab?.name == activeTabName?.value)?.component}
            </div>
        </div>
        <div class="md:hidden pb-8 px-3 mx-auto">
            <nav>
                <ul class="grid grid-cols-2 gap-x-1.5 gap-y-3">
                    {
                        tabs?.map(tab => tab?.isActive && <TabOption
                            class={isTabOdd && tabs[tabs.length - 1].name == tab.name && "col-span-2"}
                            click={handleTabClick}
                            key={tab.id}
                            name={tab.name}
                        >
                            <div class="flex justify-center items-center gap-2 sm:ps-1.5 xs:pe-1.5 sm:pe-8 py-1 sm:py-1.5 rounded-lg text-sm">
                                {tab.svg}
                                {productStatics?.[tab.name]}
                            </div>
                        </TabOption>)
                    }
                </ul>
            </nav>
            <MobileTabs
                isModalOpen={isModalOpen}
                title={productStatics?.[activeTabName.value]}
            >
                {tabs.find(tab => tab.name == activeTabName?.value)?.component}
            </MobileTabs>
        </div>
    </>
})

export default Tabs
