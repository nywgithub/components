import * as React from "react"
import { ItemProps } from "./interface"
import Progress from "./progress"

const Item: React.FC<ItemProps> = (props) => {
    const {
        prefixCls,
        file,
        deleteIcon,
        listType,
        itemRender,
        deleteItem,
    } = props

    const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
        deleteItem?.(file)
    }
    const itemDom = (
        <div className={`${prefixCls}-list-item`}>
            <div className={`${prefixCls}-item-logo`}></div>
            {console.log(file)}
            <div className={`${prefixCls}-item-name`}>{file.name}</div>
            <div className={`${prefixCls}-item-delete`} onClick={handleDelete}>
                {deleteIcon}
            </div>
            <Progress percent={file?.percent} prefixCls={prefixCls} />
        </div>
    )
    return itemRender ? itemRender(file) : itemDom
}

export default Item
