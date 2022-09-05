function getNodeFromSelector(selector: string | Element): Element {
    if (selector instanceof Element) {
        return selector
    }
    if (typeof selector === "string") {
        const node = document.querySelector(selector)
        if (node) {
            return node
        }
    }
    throw new Error("Invalid selector")
}

export { getNodeFromSelector }
