import React from "react"
import { DropDownProps } from "../interface"
import Option from "./Option"
const DropDown: React.FC<DropDownProps> = (props) => {
    const { prefixCls, trigger, dropDownListArray, multiple } = props
    const handleSelect = (val) => {
        console.log('choosen', val)
    }
    return (
        <div className={`${prefixCls}-dropDown`}>
            {dropDownListArray.map((option) => (
                <Option
                    {...option.props}
                    key={option.key}
                    prefixCls={prefixCls}
                    multiple={multiple}
                    onSelect={handleSelect}
                ></Option>
            ))}
        </div>
    )
}

export default DropDown
