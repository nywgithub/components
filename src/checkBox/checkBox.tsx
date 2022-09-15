import React from "react"
import classNames from "classnames"
import { CheckBoxProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
const ForwardCheckBox: React.ForwardRefRenderFunction<
    unknown,
    CheckBoxProps
> = ({ prefixCls: customizePrefixCls, ...props }, ref) => {
    const { style, className } = props
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("checkBox", customizePrefixCls)

    React.useImperativeHandle(ref, () => ({}))

    return (
        <div className={`${prefixCls} ${className || ""}`} style={style}></div>
    )
}

const CheckBox = React.forwardRef<unknown, CheckBoxProps>(
    ForwardCheckBox
)

CheckBox.defaultProps = {}

export default CheckBox
