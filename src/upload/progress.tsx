import * as React from "react"
import {ProgressProps } from "./interface"

const Progress: React.FC<ProgressProps> = (props) => {
    const {prefixCls, percent} = props
    return <div className={`${prefixCls}-process`}>
        {percent}
    </div>
}

export default Progress
