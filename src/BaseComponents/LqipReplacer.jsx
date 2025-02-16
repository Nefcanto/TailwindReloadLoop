const LqipReplacer = () => {

    const code = `
        document.addEventListener("DOMContentLoaded", () => {
            const originalImages = document.querySelectorAll(".lqipOriginalImage")
            originalImages.forEach((img) => {
                const originalSrc = img.getAttribute("datasrc");
                const tempImage = new Image();
                tempImage.src = originalSrc;
                tempImage.onload = () => {
                    const skeleton = img.closest(".lqipContainer").querySelector(".lqipSkeleton");
                    if (skeleton) skeleton.style.display = "none";
                    const placeholder = img.closest(".lqipContainer").querySelector(".lqipPlaceholder");
                    if (placeholder) placeholder.style.display = "none";
                    img.src = originalSrc;
                    img.style.opacity = 1;
                    img.classList.remove("opacity-0")
                };
            });
        });
    `

    return <script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={code}
    >
    </script>
}

export default LqipReplacer
