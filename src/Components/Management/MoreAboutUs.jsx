import { component$ } from "@builder.io/qwik"
import { MoreAboutUsCard } from "Management"
import { Title } from "Shared"

const MoreAboutUs = component$(({ aboutUs }) => {

    return <>
        <section class="relative px-3 xl:px-10">
            <Title
                class="my-10 text-lg"
                text={aboutUs.title}
            />
            <div class="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 md:gap-2">
                {
                    aboutUs.items.map(item => <MoreAboutUsCard
                        item={item}
                        key={item.id}
                    />
                    )
                }
            </div>
        </section>
    </>
})

export default MoreAboutUs
