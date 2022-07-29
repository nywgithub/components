import React from "react"
import RcUpload from "rc-upload"
import classNames from "classnames"
import { UploadProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
import UploadList from "./uploadList"

import "./style"

const Upload: React.FC<UploadProps> = ({
    //自定义class前缀prefixCls
    prefixCls: customizePrefixCls,
    ...props
}) => {
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("upload", customizePrefixCls)

    //rc-upload属性单独拎出来写
    const RcUploadProps = {
        ...props,
        prefixCls,
    }

    const rcUpload = React.useRef(null)
    
    return (
        <div className={`${prefixCls}-wrapper`}>
            <RcUpload {...RcUploadProps} ref={rcUpload} />
        </div>
    )
}

export default Upload
