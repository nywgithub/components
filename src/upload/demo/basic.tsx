/*
 * @Author: niyongwei
 * @Date: 2022-04-07 10:32:36
 * @LastEditors: niyongwei
 * @LastEditTime: 2022-04-07 10:58:13
 * @FilePath: \git-work\components\src\upload\demo\basic.tsx
 * @Description:
 *
 * Copyright (c) 2022 by nyw, All Rights Reserved.
 */
import { rejects } from "assert"
import React from "react"
import Upload from ".."
// import '../style';
export default () => {
    const [listValue, setListValue] = React.useState([])
    const [percent, setPercent] = React.useState(0)
    const beforeUpload = async (file: any, FileList: any) => {
        console.log(file)
        console.log(FileList)
    }
    const onProgress = (e, file) => {
        setPercent(e.percent)
    }
    const onSuccess = (a, b, c) => {
        console.log(a, b, c)
        console.log("uploadRef",uploadRef.current)
    }
    const onChange = (file, fileList) => {
        console.log(file, fileList)
        setListValue(fileList)
        setPercent(0)
    }
    const onFileLimit = (limit) => {
        alert(`超出${limit}个限制了`)
    }
    const onFileSize = (size) => {
        alert(`当前${size}kb,超出限制了`)
    }
    const uploadRef = React.useRef(null)
    return (
        <Upload
            fileSize={100}
            onFileLimit={onFileLimit}
            fileLimit={2}
            onFileSize={onFileSize}
            action={"upload/add"}
            beforeUpload={beforeUpload}
            onProgress={onProgress}
            onSuccess={onSuccess}
            prefixCls="diyClass"
            onChange={onChange}
            listValue={listValue}
            ref = {uploadRef}
        >
            上传 已上传: {listValue.length} 进度：{percent}
        </Upload>
    )
}
