export const slugify = (name) => {
    return name.toLowerCase().split("-").join("_").split(" ").join("-")
}

export const reSlugify = (name) => {
    return name.split("-").join(" ").split("_").join("-")
}