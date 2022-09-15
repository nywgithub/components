import React from "react"
import { CheckBoxProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
import CheckGroup from "./checkGroup"
const CheckBox = ({
    prefixCls: customizePrefixCls,
    ...props
}: CheckBoxProps) => {
    const {
        style,
        className,
        onChange,
        checked,
        disabled,
        value,
        children,
    } = props
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("checkBox", customizePrefixCls)

    const handleNativeCheckboxChange = (evt) => {
        console.log(evt)
        const e = Object.create(evt)
        e.props = {
            value,
            checked: e.target?.checked,
        }
        onChange?.(e)
    }

    const nativeCheckbox = (
        <input
            id="demo"
            type="checkbox"
            onChange={handleNativeCheckboxChange}
            checked={checked}
            disabled={disabled}
        />
    )

    return (
        // input的事件会冒泡到label上
        <label className={`${prefixCls} ${className || ""}`} style={style}>
            <span className={`${prefixCls}-inner`}>{nativeCheckbox}</span>
            <span className={`${prefixCls}-label`}>{children}</span>
        </label>
    )
}

CheckBox.defaultProps = {
    checked: false,
    disabled: false,
}

CheckBox.Group = CheckGroup

export default CheckBox
