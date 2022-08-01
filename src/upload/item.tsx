import * as React from "react"
import { ItemProps } from "./interface"

const Item: React.FC<ItemProps> = (props) => {
    const { prefixCls, file } = props
    return (
        <div className={`${prefixCls}-list-item`}>
            <div className={`${prefixCls}-item-logo`}></div>
            <div className={`${prefixCls}-item-name`}>{file.name}</div>
        </div>
    )
}

export default Item
