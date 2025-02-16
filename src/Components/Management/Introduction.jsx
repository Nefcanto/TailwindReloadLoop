import { IntroductionCard } from "Management"

const Introduction = ({ aboutManager }) => {

    return <>
        <section class="flex flex-col">
            {
                aboutManager.items.map((item, index) => <IntroductionCard
                    index={index}
                    item={item}
                    key={item?.id}
                />
                )
            }
        </section >
    </>
}

export default Introduction
