import * as React from "react"
import { ItemProps, FileProps } from "./interface"

const Item: React.FC<ItemProps> = ({ prefixCls, ...props }) => {
    return <div className={`${prefixCls}-list-item`}></div>
}

export default Item
