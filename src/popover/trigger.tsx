import React, { cloneElement, useImperativeHandle } from "react"
import { isElement, isFragment } from "react-is"

export interface TriggerProps {
    trigger?: "click" | "focus" | "hover"
    triggerEvent?: any
    Tref: any
}

const Trigger: React.FC<TriggerProps> = ({ Tref, ...props }) => {
    const { children, trigger, triggerEvent } = props

    let childrenNode: React.ReactNode

    const ref = React.useRef(null)

    useImperativeHandle(Tref, () => ({
        element: ref,
    }))

    if (isElement(children) && !isFragment(children)) {
        childrenNode = cloneElement(
            children as React.FunctionComponentElement<{
                ref: React.MutableRefObject<null>
            }>,
            triggerEvent
        )
    }

    return (
        <div className="trigger-wrapper" ref={ref}>
            {childrenNode}
        </div>
    )
}

export default Trigger
