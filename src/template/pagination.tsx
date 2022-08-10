import React from "react"
import classNames from "classnames"
import { DemoProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
const ForwardDemo: React.ForwardRefRenderFunction<unknown, DemoProps> = (
    { prefixCls: customizePrefixCls, ...props },
    ref
) => {
    const { style, className } = props
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("demo", customizePrefixCls)

    React.useImperativeHandle(ref, () => ({}))

    return (
        <div className={`${prefixCls} ${className || ""}`} style={style}></div>
    )
}

const Demo = React.forwardRef<unknown, DemoProps>(ForwardDemo)

Demo.defaultProps = {}

export default Demo
