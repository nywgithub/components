import * as React from "react"
import { UploadListProps, FileProps } from "./interface"
import Item from "./item"

const UploadList: React.FC<UploadListProps> = ({
    prefixCls,
    fileList,
    ...props
}) => {
    React.useEffect(() => {
        console.log("fileList", fileList)
    }, [fileList])
    
    return (
        <div className={`${prefixCls}-list`}>
            {fileList.map((item, index) => (
                <Item prefixCls={prefixCls} />
            ))}
        </div>
    )
}

export default UploadList
