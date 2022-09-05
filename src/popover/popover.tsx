import React, { useEffect, useImperativeHandle } from "react"
import classNames from "classnames"
import { PopOverProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
import Portal from "./portal"
import Trigger from "./trigger"
import DomAlign from "./domAlign"

const ForwardPopOver: React.ForwardRefRenderFunction<unknown, PopOverProps> = (
    { prefixCls: customizePrefixCls, ...props },
    ref
) => {
    const { style, className, closeByEsc, onClose } = props
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("popover", customizePrefixCls)

    React.useImperativeHandle(ref, () => ({}))

    useEffect(() => {
        if (closeByEsc && onClose) {
            function onKeyUp(e: KeyboardEvent) {
                if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
                    onClose!(e)
                }
            }
            document.body.addEventListener("keyup", onKeyUp)
        }
    }, [])

    return (
        <div className={`${prefixCls} ${className || ""}`} style={style}>
            
        </div>
    )
}

const PopOver = React.forwardRef<unknown, PopOverProps>(ForwardPopOver)

PopOver.defaultProps = {}

export default PopOver
