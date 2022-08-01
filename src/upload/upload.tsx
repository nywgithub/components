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
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("upload", customizePrefixCls) //wei-upload

    const [fileList, setFileList] = React.useState<Array<FileProps>>([])

    const onStart: RcUploadTypes["onStart"] = (file: FileProps) => {
        console.info("onStart-file:", file)
    }

    const beforeUpload: RcUploadTypes["beforeUpload"] = async (
        file: FileProps,
        FileList: FileProps[]
    ) => {
        console.info("beforeUpload-file:", file)
        console.info("beforeUpload-FileList:", FileList)
    }

    const onSuccess: RcUploadTypes["onSuccess"] = (
        response: Record<string, unknown>,
        file: FileProps,
        xhr: XMLHttpRequest
    ) => {
        console.info("onSuccess-response:", response)
        console.info("onSuccess-file:", file)
        console.info("onSuccess-xhr:", xhr)
        let cloneFileList = [...fileList]
        cloneFileList.push(file)
        console.log("fileList", cloneFileList)

        setFileList(cloneFileList)
    }

    const onError: RcUploadTypes["onError"] = (
        error: Error,
        ret: Record<string, unknown>,
        file: FileProps
    ) => {
        console.info("onError-error:", error)
        console.info("onError-ret:", ret)
        console.info("onError-file:", file)
    }

    //rc-upload属性单独拎出来写
    const RcUploadProps = {
        ...props,
        prefixCls,
        onStart,
        beforeUpload,
        onSuccess,
        onError,
    }

    const rcUpload = React.useRef(null)

    return (
        <div className={`${prefixCls}-wrapper`}>
            <RcUpload {...RcUploadProps} ref={rcUpload} />
            <UploadList prefixCls={prefixCls} fileList={fileList} />
        </div>
    )
}

export default Upload
