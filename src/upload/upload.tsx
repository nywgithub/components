import React from "react"
import RcUpload, { UploadProps as RcUploadTypes } from "rc-upload"
import classNames from "classnames"
import { UploadProps, FileProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
import UploadList from "./uploadList"

import "./style"

const Upload: React.FC<UploadProps> = ({
    //自定义class前缀prefixCls
    prefixCls: customizePrefixCls,
    ...props
}) => {
    const {
        defaultFile,
        listType,
        listValue,
        itemRender,
        deleteIcon,
        onChange,
        onStart,
        beforeUpload,
        onSuccess,
        onError,
        fileLimit,
        onFileLimit,
        fileSize,
        onFileSize,
    } = props
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("upload", customizePrefixCls) //wei-upload

    const [fileList, setFileList] = React.useState<Array<FileProps>>(
        defaultFile?.concat(listValue || []) || []
    )

    //上传列表发生改变处理方法
    const updateUploadList = (file: FileProps, type?: string) => {
        let cloneFileList = [...fileList]

        //判断发生改变的file 是新增，删除还是修改
        let fileIndex = cloneFileList.findIndex((item) => item.uid === file.uid)

        if (fileIndex === -1) {
            cloneFileList.push(file)
        } else {
            cloneFileList[fileIndex] = file
            type === "delete" && cloneFileList.splice(fileIndex, 1)
        }
        onChange?.(file, cloneFileList)
        return cloneFileList
    }

    const deleteItem = (file: FileProps) => {
        let removedFileList = updateUploadList(file, "delete")
        setFileList(removedFileList)
    }

    /* 上传生命周期 */
    const mergeStart: RcUploadTypes["onStart"] = (file: FileProps) => {
        console.info("onStart-file:", file)
        onStart?.(file)
    }

    const mergeBeforeUpload: RcUploadTypes["beforeUpload"] = async (
        file: FileProps,
        FileList: FileProps[]
    ) => {
        console.info("beforeUpload-file:", file)
        console.info("beforeUpload-FileList:", FileList)
        beforeUpload?.(file, FileList)
        const { size } = file
        //TODO: 停止上传
        if (fileSize && size / 1024 / 1024 > fileSize) {
            onFileSize?.(size)
        }

        if (fileLimit && FileList.length > fileLimit) {
            onFileLimit?.()
        }
    }

    const mergeSuccess: RcUploadTypes["onSuccess"] = (
        response: Record<string, unknown>,
        file: FileProps,
        xhr: XMLHttpRequest
    ) => {
        console.info("onSuccess-response:", response)
        console.info("onSuccess-file:", file)
        console.info("onSuccess-xhr:", xhr)
        //新增file直接push
        let nextFileList = updateUploadList(file)
        setFileList(nextFileList)
        onSuccess?.(response, file, xhr)
    }

    const mergeError: RcUploadTypes["onError"] = (
        error: Error,
        ret: Record<string, unknown>,
        file: FileProps
    ) => {
        console.info("onError-error:", error)
        console.info("onError-ret:", ret)
        console.info("onError-file:", file)
        onError?.(error, ret, file)
    }

    //rc-upload属性单独拎出来写
    const RcUploadProps = {
        ...(props as RcUploadTypes),
        prefixCls,
        onStart: mergeStart,
        beforeUpload: mergeBeforeUpload,
        onSuccess: mergeSuccess,
        onError: mergeError,
    }

    const rcUpload = React.useRef(null)

    return (
        <div className={`${prefixCls}-wrapper`}>
            <RcUpload {...RcUploadProps} ref={rcUpload} />
            <UploadList
                prefixCls={prefixCls}
                fileList={fileList}
                itemRender={itemRender}
                listType={listType}
                deleteIcon={deleteIcon}
                deleteItem={deleteItem}
            />
        </div>
    )
}

Upload.defaultProps = {
    deleteIcon: <span>x</span>,
}

export default Upload
