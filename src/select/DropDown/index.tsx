import React from "react"
import { DropDownProps } from "../interface"
import Option from "./Option"
const DropDown: React.FC<DropDownProps> = (props) => {
    const { prefixCls, trigger, SelectionListArray } = props
    return (
        <div className={`${prefixCls}-dropDown`}>
            {SelectionListArray.map((option) => (
                <Option
                    {...option.props}
                    key={option.key}
                    prefixCls={prefixCls}
                ></Option>
            ))}
        </div>
    )
}

export default DropDown
