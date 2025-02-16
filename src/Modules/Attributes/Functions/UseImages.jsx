const useImages = (entity, variants, variantSlug) => {

    let images

    if (variantSlug) {
        images = variants?.find(item => item.slug === variantSlug)?.relatedItems.images
    } else {
        images = entity?.relatedItems.images
    }

    return images
}

export default useImages
