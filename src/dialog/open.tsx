import React from "react"
import ReactDOM from "react-dom"
import Dialog from "./dialog"
const open = ({ content, ...props }) => {
    const container = document.createElement("div")
    const target = <Dialog {...props}>{content}</Dialog>
    ReactDOM.render(target, container)
}

export { open }
