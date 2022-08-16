import React from "react"
import classNames from "classnames"
import domAlign from "dom-align"
import { PickerProps } from "./interface"
import DropDown from "./DropDown"

const Picker: React.FC<PickerProps> = (props) => {
    const { prefixCls, multiple, defaultSelected, children, value, onChange } = props
    const [selectedValue, setSelectedValue] = React.useState(
        defaultSelected || value
    )
    const dropDownListArray = React.Children.toArray(
        children
    ) as React.ReactElement[]
    const handleSelect = (val) => {
        setSelectedValue(val)
        onChange?.(val)
    }
    return (
        <>
            <div className={`${prefixCls}-picker`}>
                <div className={`${prefixCls}-selector-container`}>
                    <span className={`${prefixCls}-selector-search`}>
                        <input type={"search"} />
                    </span>
                    <span className={`${prefixCls}-selector-item`}>
                        {selectedValue}
                    </span>
                </div>
                <div className={`${prefixCls}-picker-icon`}> - </div>
            </div>
            <DropDown
                current={selectedValue}
                prefixCls={prefixCls}
                dropDownListArray={dropDownListArray}
                onSelect={handleSelect}
            />
        </>
    )
}

export default Picker
