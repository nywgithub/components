import React, { cloneElement } from "react"
import { isElement, isFragment } from "react-is"

export interface TriggerProps {
    trigger?: "click" | "focus" | "hover"
    triggerEvent?: () => void
}

const Trigger: React.FC<TriggerProps> = (props) => {
    const { children, trigger, triggerEvent } = props

    let childrenProps = {}

    if (trigger === "click") {
        childrenProps["onClick"] = triggerEvent
    } else if (trigger === "hover") {

    } else if (trigger === "focus") {
        
    }

    let childrenNode: React.ReactNode

    if (isElement(children) && !isFragment(children)) {
        childrenNode = cloneElement(children, childrenProps)
    }

    return <div className="trigger-wrapper">{childrenNode}</div>
}

export default Trigger
