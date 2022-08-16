import React from "react"
import classNames from "classnames"
import { OptionProps } from "../interface"

const Option: React.FC<OptionProps> = (props) => {
    const { prefixCls, value, multiple, onSelect, children, selected } = props
    const handleClick = () => {
        onSelect?.(value)
    }
    return (
        <div
            className={`${prefixCls}-option ${classNames({
                selected: selected,
            })}`}
            onClick={handleClick}
        >
            {children}
        </div>
    )
}

export default Option
