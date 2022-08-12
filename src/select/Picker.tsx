import React from "react"
import classNames from "classnames"
import { PickerProps } from "./interface"
import DropDown from "./DropDown"

const Picker: React.FC<PickerProps> = (props) => {
    const { prefixCls, dropDownListArray, multiple } = props
    const [selectedValue, setSelectedValue] = React.useState('')
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
                prefixCls={prefixCls}
                dropDownListArray={dropDownListArray}
            />
        </>
    )
}

export default Picker
