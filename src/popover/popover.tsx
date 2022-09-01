import React from "react"
import classNames from "classnames"
import { PopOverProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
const ForwardPopOver: React.ForwardRefRenderFunction<unknown, PopOverProps> = (
    { prefixCls: customizePrefixCls, ...props },
    ref
) => {
    const { style, className } = props
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("popover", customizePrefixCls)

    React.useImperativeHandle(ref, () => ({}))

    return (
        <div className={`${prefixCls} ${className || ""}`} style={style}></div>
    )
}

const PopOver = React.forwardRef<unknown, PopOverProps>(ForwardPopOver)

PopOver.defaultProps = {}

export default PopOver
