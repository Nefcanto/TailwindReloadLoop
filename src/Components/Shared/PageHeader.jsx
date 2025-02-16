const PageHeader = ({
    description,
    title,
}) => {
    return <section class="max-w-7xl text-center mx-auto mt-16 p-6">
        <h1 class="font-black text-xl relative after:absolute after:h-1 after:bg-custom-color1 after:w-24 after:mx-auto after:mt-10 after:inset-x-0">
            {title}
        </h1>
        <p class="font-extrabold text-lg mt-8">
            {description}
        </p>
    </section>
}

export default PageHeader
