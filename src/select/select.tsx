import React from "react"
import classNames from "classnames"
import { SelectProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
const ForwardSelect: React.ForwardRefRenderFunction<unknown, SelectProps> = (
    { prefixCls: customizePrefixCls, ...props },
    ref
) => {
    const { style, className } = props
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("select", customizePrefixCls)

    React.useImperativeHandle(ref, () => ({}))

    return (
        <div className={`${prefixCls} ${className || ""}`} style={style}></div>
    )
}

const Select = React.forwardRef<unknown, SelectProps>(ForwardSelect)

Select.defaultProps = {}

export default Select
