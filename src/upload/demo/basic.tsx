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
import React from "react"
import Upload from ".."
// import '../style';
export default () => {
    const [listValue, setListValue] = React.useState([])
    const beforeUpload = async (file: any, FileList: any) => {
        console.log(file)
        console.log(FileList)
        return false
    }
    const onSuccess = (a, b, c) => {
        console.log(a, b, c)
    }
    const onChange = (file, fileList) => {
        console.log(file, fileList)
        setListValue(fileList)
    }
    const onFileLimit = (limit) => {
        alert(`超出${limit}个限制了`)
    }
    const onFileSize = (size) => {
        alert(`当前${size}kb,超出限制了`)
    }
    return (
        <Upload
            fileSize={100}
            onFileLimit={onFileLimit}
            fileLimit={2}
            onFileSize={onFileSize}
            action={"upload/add"}
            beforeUpload={beforeUpload}
            onSuccess={onSuccess}
            prefixCls="diyClass"
            onChange={onChange}
            listValue={listValue}
        >
            上传 已上传: {listValue.length}
        </Upload>
    )
}
