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
import React from 'react'
import Upload from '..'
// import '../style';
export default () => {
  const beforeUpload = async (file: any, FileList: any) => {
    /* if (file.size / 1024 / 1024 > 2) {
      alert(1)
      return false
    } */
    await new Promise((resolve, reject) => {
      console.log(file.size / 1024 / 1024)
      if (file.size / 1024 / 1024 > 2) {
        reject()
      }
      resolve(file)
    })
  }
  const onSuccess=(a,b,c)=>{
    console.log(a,b,c)
  }
  return (
    <Upload size={1} action={'upload'} beforeUpload={beforeUpload} onSuccess={onSuccess}>
      上传
    </Upload>
  )
}
