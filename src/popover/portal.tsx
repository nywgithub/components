import classNames from "classnames"
import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { getNodeFromSelector } from "./utils"
export interface PortalProps {
    className?: string
    style?: React.CSSProperties
    container: Element | string
    visible?: boolean
}

const Portal: React.FC<PortalProps> = (props) => {
    const { container, children, visible, className, style } = props
    const sourceNode = (
        <div className={`portal-wrapper ${className}`} style={style}>
            {children}
        </div>
    )
    const portalContainer = getNodeFromSelector(container)

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
