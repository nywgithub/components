import classNames from "classnames"
import React, { useRef, useEffect, useImperativeHandle } from "react"
import ReactDOM from "react-dom"
import { getNodeFromSelector } from "./utils"
export interface PortalProps {
    className?: string
    style?: React.CSSProperties
    container: Element | string
    visible?: boolean
    Pref: any
}

const Portal: React.FC<PortalProps> = ({ Pref, ...props }) => {
    const { container, children, visible, className, style } = props

    const sourceRef: any = useRef(null)

    const sourceNode = (
        <div
            className={`portal-wrapper ${classNames({
                [className!]: className,
            })}`}
            style={style}
            ref={(el: HTMLDivElement) => {
                sourceRef.current = el
            }}
        >
            {children}
        </div>
    )

    const portalContainer = getNodeFromSelector(container)

    useImperativeHandle(Pref, () => ({
        element: sourceRef.current,
    }))

    const purePortal = portalContainer
        ? ReactDOM.createPortal(
              // Any valid React child: JSX, strings, arrays, etc.
              sourceNode,
              // A DOM element
              portalContainer
          )
        : null

    return visible ? purePortal : null
}

Portal.defaultProps = {
    container: "body",
    visible: false,
}

export default Portal
