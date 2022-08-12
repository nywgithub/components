import React from "react"
import classNames from "classnames"
import { SelectProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
import NativeSelect from "./native/nativeSelect"
import DropDown from "./DropDown"
import Option from "./DropDown/Option"
import Picker from "./Picker"

const ForwardSelect: React.ForwardRefRenderFunction<unknown, SelectProps> = (
    { prefixCls: customizePrefixCls, ...props },
    ref
) => {
    const { style, className, children, multiple } = props
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("select", customizePrefixCls)

    const dropDownListArray = React.Children.toArray(
        children
    ) as React.ReactElement[]

    const nativeGroups = [
        {
            label: "animal",
            disabled: false,
            options: [
                {
                    label: "dog",
                    value: "dog",
                    disabled: false,
                },
                {
                    label: "cat",
                    value: "cat",
                    disabled: false,
                },
            ],
        },
        {
            label: "city",
            disabled: false,
            options: [
                {
                    label: "beijing",
                    value: "beijing",
                    disabled: false,
                },
                {
                    label: "shanghai",
                    value: "shanghai",
                    disabled: true,
                },
            ],
        },
    ]

    React.useImperativeHandle(ref, () => ({}))

    return (
        <div className={`${prefixCls} ${className || ""}`} style={style}>
            <Picker
                prefixCls={prefixCls}
                dropDownListArray={dropDownListArray}
                multiple={multiple}
            />

            {/* 根据children生成原生select */}
            <NativeSelect groupList={nativeGroups} />
        </div>
    )
}

const Select = React.forwardRef<unknown, SelectProps>(ForwardSelect)

Select.defaultProps = {}
//@ts-ignore
Select.Option = Option
export default Select
