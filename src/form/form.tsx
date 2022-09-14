import React from "react"
import classNames from "classnames"
import { FormProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
const ForwardForm: React.ForwardRefRenderFunction<unknown, FormProps> = (
    { prefixCls: customizePrefixCls, ...props },
    ref
) => {
    const { style, className } = props
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("form", customizePrefixCls)

    React.useImperativeHandle(ref, () => ({}))

    return (
        <div className={`${prefixCls} ${className || ""}`} style={style}></div>
    )
}

const Form = React.forwardRef<unknown, FormProps>(ForwardForm)

Form.defaultProps = {}

export default Form
