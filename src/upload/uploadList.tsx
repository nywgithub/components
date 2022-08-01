import * as React from "react"
import { UploadListProps, FileProps } from "./interface"
import Item from "./item"

const UploadList: React.FC<UploadListProps> = (props) => {
    const { prefixCls, fileList } = props

    const itemList = [
        ...fileList.map((file: FileProps) => ({
            key: file.uid,
            file,
        })),
    ]

    return (
        <div className={`${prefixCls}-list`}>
            {itemList.map((item, index) => (
                <Item prefixCls={prefixCls} key={index} file={item.file} />
            ))}
        </div>
    )
}

export default UploadList
