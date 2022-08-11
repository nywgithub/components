import React from "react"
import { OptionProps } from "../interface"

const Option: React.FC<OptionProps> = (props) => {
    const { prefixCls, value } = props
    return <div className={`${prefixCls}-option`}>{value}</div>
}

export default Option
