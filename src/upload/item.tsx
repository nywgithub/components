import * as React from "react"
import { ItemProps } from "./interface"

const Item: React.FC<ItemProps> = (props) => {
    const { prefixCls, file, deleteIcon, listType, itemRender, deleteItem } = props

    const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
        deleteItem?.(file)
    }
    return (
        <div className={`${prefixCls}-list-item`}>
            <div className={`${prefixCls}-item-logo`}></div>
            <div className={`${prefixCls}-item-name`}>{file.name}</div>
            <div
                className={`${prefixCls}-item-delete`}
                onClick={handleDelete}
            >
                {deleteIcon}
            </div>
        </div>
    )
}

export default Item
