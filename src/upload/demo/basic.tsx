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
import React from 'react';
import Upload from '..';
// import '../style';
export default () => {
  const defaultList = [
    {
      uid: 'rc-upload-1659595914921-2',
      lastModified: 1645251953703,
      lastModifiedDate: 'Sat Feb 19 2022 14:25:53 GMT+0800 (中国标准时间) {}',
      name: 'test2.png',
      size: 168078,
      type: 'image/png',
      webkitRelativePath: '',
    },
  ];
  const [listValue, setListValue] = React.useState([]);
  const [percent, setPercent] = React.useState(0);
  const beforeUpload = async (file: any, FileList: any) => {
    console.log(file);
    console.log(FileList);
  };
  const onProgress = (e: any, file: any) => {
    setPercent(e.percent);
  };
  const onSuccess = (a: any, b: any, c: any) => {
    console.log(a, b, c);
    console.log('uploadRef', uploadRef.current);
    console.log('listValue', listValue);
  };
  const onChange = (file: any, fileList: any) => {
    console.log('change', file, fileList);
    setListValue(fileList);
    setPercent(0);
  };
  const onStart = (file: any) => {
    console.log('start:', file);
  };
  const onFileLimit = (limit: any) => {
    alert(`超出${limit}个限制了`);
  };
  const onFileSize = (size: any) => {
    alert(`当前${size}kb,超出限制了`);
  };
  const uploadRef = React.useRef(null);

  const itemRender = (file: any, option: any) => {
    const { del: deleteItem } = option;
    return (
      <div className="upload-item">
        <div>{file.name}</div>
        <div onClick={deleteItem}>删除</div>
      </div>
    );
  };

  const deleteFN = (index: number) => {
    let fielList = [...listValue];
    fielList.splice(index, 1);
    setListValue(fielList);
  };

  return (
    <>
      {/* <div className="upload-list">
                {listValue.map((item, index) => (
                    <div className="upload-list-item" key={index}>
                        <div className="name">{item?.name}</div>
                        <div
                            className="delete"
                            onClick={() => {
                                deleteFN(index)
                                // uploadRef?.current?.deleteItem?.(item)
                            }}
                        >
                            删除
                        </div>
                    </div>
                ))}
            </div> */}
      <Upload
        accept={'.png'}
        fileSize={1000}
        onFileLimit={onFileLimit}
        fileLimit={2}
        onFileSize={onFileSize}
        action={'upload/add'}
        beforeUpload={beforeUpload}
        defaultFile={defaultList}
        onProgress={onProgress}
        onSuccess={onSuccess}
        prefixCls="diyClass"
        onChange={onChange}
        listValue={listValue}
        itemRender={itemRender}
        deleteIcon={<div>删除</div>}
        ref={uploadRef}
        onStart={onStart}
        type="drag"
      >
        上传 已上传: {listValue.length} 进度：{percent}
      </Upload>
    </>
  );
};
