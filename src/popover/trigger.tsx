import React, { cloneElement } from "react"
import { isElement, isFragment } from "react-is"

export interface TriggerProps {
    trigger?: "click" | "focus" | "hover"
    triggerEvent?: any
}

const Trigger: React.FC<TriggerProps> = (props) => {
    const { children, trigger, triggerEvent } = props

    let childrenProps = {}

    if (trigger === "click") {
        childrenProps["onClick"] = triggerEvent!["onClick"]
    } else if (trigger === "hover") {
        childrenProps["onMouseEnter"] = triggerEvent!["onMouseEnter"]
        childrenProps["onMouseLeave"] = triggerEvent!["onMouseLeave"]
    } else if (trigger === "focus") {
    }

    let childrenNode: React.ReactNode

    if (isElement(children) && !isFragment(children)) {
        childrenNode = cloneElement(children, childrenProps)
    }

    return <div className="trigger-wrapper">{childrenNode}</div>
}

export default Trigger
