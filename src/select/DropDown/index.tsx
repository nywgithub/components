import React from "react"
import { DropDownProps } from "../interface"
import Option from "./Option"
const DropDown: React.FC<DropDownProps> = (props) => {
    const {
        prefixCls,
        trigger,
        dropDownListArray,
        multiple,
        onSelect,
        current,
    } = props
    const handleSelect = (val, current) => {
        console.log("choosen", val)
        onSelect?.(val)
    }
    return (
        <div className={`${prefixCls}-dropDown`}>
            {dropDownListArray.map((option) => {
                return (
                    <Option
                        {...option.props}
                        selected={
                            option.props.value === current
                        }
                        key={option.key}
                        prefixCls={prefixCls}
                        multiple={multiple}
                        onSelect={(val) => handleSelect(val, option.props.value)}
                    ></Option>
                )
            })}
        </div>
    )
}

export default DropDown
