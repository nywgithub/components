import * as React from "react"
import { UploadListProps, FileProps } from "./interface"
import { previewImage } from "./utils"
import Item from "./item"

const UploadList: React.FC<UploadListProps> = (props) => {
    const {
        prefixCls,
        fileList,
        listType,
        itemRender,
        deleteIcon,
        deleteItem,
    } = props

    let itemList = [
        ...fileList.map((file: FileProps) => ({
            key: file.uid,
            file,
        })),
    ]
    //TODO: 过滤status为start的数据
    itemList = itemList.filter((item) => item.file.status !== "start")
    console.log("itemList", itemList)
    /* itemList.map((item) => {
        const { file } = item
        console.log("currfile", file)
        previewImage(file as File)
            .then((previewDataUrl: string) => {
                file.thumbUrl = previewDataUrl || ""
            })
            .catch((e) => {
                console.error(e)
            })
    }) */
    return (
        <div className={`${prefixCls}-list`}>
            {itemList.map((item, index) => (
                <Item
                    prefixCls={prefixCls}
                    key={index}
                    file={item.file}
                    listType={listType}
                    itemRender={itemRender}
                    deleteIcon={deleteIcon}
                    deleteItem={deleteItem}
                />
            ))}
        </div>
    )
}

export default UploadList
