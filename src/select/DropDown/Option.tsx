import React from "react"
import classNames from "classnames"
import { OptionProps } from "../interface"

const Option: React.FC<OptionProps> = (props) => {
    const { prefixCls, value, selectedValue, multiple, onSelect } = props

    const handleClick = () => {
        onSelect?.(value)
    }
    return (
        <div
            className={`${prefixCls}-option ${classNames({
                'selected': selectedValue === value,
            })}`}
            onClick={handleClick}
        >
            {value}
        </div>
    )
}

export default Option
