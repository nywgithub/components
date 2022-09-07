import React from "react"
import classNames from "classnames"
import { DialogProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
const ForwardDialog: React.ForwardRefRenderFunction<unknown, DialogProps> = (
    { prefixCls: customizePrefixCls, ...props },
    ref
) => {
    const { style, className } = props
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("Dialog", customizePrefixCls)

    React.useImperativeHandle(ref, () => ({}))

    return (
        <div className={`${prefixCls} ${className || ""}`} style={style}></div>
    )
}

const Dialog = React.forwardRef<unknown, DialogProps>(ForwardDialog)

Dialog.defaultProps = {}

export default Dialog
