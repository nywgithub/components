import React from "react"
import { CheckGroupProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
const CheckGroup: React.FC<CheckGroupProps> = ({
    prefixCls: customizePrefixCls,
    ...props
}) => {
    const { style, className, onChange, disabled, value, children } = props

    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("checkBox", customizePrefixCls)

    // console.log(React.Children.toArray(children))
    // console.log(React.isValidElement(children))

    // console.log(React.Children)

    return (
        <div
            className={`${prefixCls}-checkBox-group ${className || ""}`}
            style={style}
        >
            {React.Children.map(children, (child: any, i) => {
                if (child?.type?.name === "CheckBox") {
                    return React.cloneElement(child, {
                        onChange: (e) => {
                            onChange?.(e)
                        },
                        checked: value
                            ? value.indexOf(child.props.value) !== -1
                            : child.props.checked,
                        disabled: disabled || child.props.disabled,
                    })
                } else {
                    return null
                }
            })}
        </div>
    )
}

CheckGroup.defaultProps = {
    disabled: false,
}

export default CheckGroup
