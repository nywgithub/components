import RcUpload, { UploadProps as RcUploadTypes } from 'rc-upload';
import type { UploadProgressEvent } from 'rc-upload/lib/interface';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import React from 'react';
import { ConfigContext } from '../common-provider/context';
import { FileProps, InsertFileProps, UploadProps } from './interface';
import UploadList from './uploadList';

import './style';

const ForwardRefUpload: React.ForwardRefRenderFunction<unknown, UploadProps> = (
  {
    //自定义class前缀prefixCls
    prefixCls: customizePrefixCls,
    ...props
  },
  ref,
) => {
  const {
    defaultFile,
    listType,
    listValue,
    itemRender,
    deleteIcon,
    onChange,
    onStart,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    fileLimit,
    onFileLimit,
    fileSize,
    onFileSize,
  } = props;

  React.useImperativeHandle(ref, () => ({
    onBatchStart,
    onSuccess: mergeSuccess,
    onProgress: mergeProgress,
    onError: mergeError,
    fileList,
    upload: rcUpload.current,
    deleteItem,
  }));

  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('upload', customizePrefixCls); //cherry-upload

  const [fileList, setFileList] = useMergedState(defaultFile || [], {
    value: listValue,
    postState: (list) => list ?? [],
  });

  /* React.useEffect(()=>{
      setFileList(listValue || [])
    },[listValue]) */

  // 解决file不能通过使用对象展开问题
  const insertedFileObj = (file: FileProps, insertObj: InsertFileProps) => {
    const { uid, lastModified, lastModifiedDate, name, size, type, webkitRelativePath } = file;
    return {
      uid,
      lastModified,
      lastModifiedDate,
      name,
      size,
      type,
      webkitRelativePath,
      ...insertObj,
    };
  };

  //上传列表发生改变处理方法
  const updateUploadList = (file: FileProps, updateType?: string) => {
    let cloneFileList = [...fileList];

    //判断发生改变的file 是新增，删除还是修改
    let fileIndex = cloneFileList.findIndex((item) => item.uid === file.uid);

    if (fileIndex === -1) {
      cloneFileList.push(file);
    } else {
      cloneFileList[fileIndex] = file;
      updateType === 'delete' && cloneFileList.splice(fileIndex, 1);
    }
    return cloneFileList;
  };

  const deleteItem = (file: FileProps) => {
    let removedFileList = updateUploadList(file, 'delete');
    setFileList(removedFileList);
    onChange?.(file, removedFileList);
  };

  //为file新增属性, antd做法：onBatchStart时在file中植入新增的属性
  const onBatchStart: RcUploadTypes['onBatchStart'] = (
    FileList: {
      file: FileProps;
      parsedFile: string | File | Blob;
    }[],
  ) => {
    const insertObj = {
      percent: 0,
      status: 'start',
    };
    let insertedFileInfoList = FileList.map((item) => {
      let originFileObj = item.file;
      let clone: any;

      try {
        // @ts-ignore
        clone = new File([originFileObj], originFileObj.name, {
          type: originFileObj.type,
        }) as any as FileProps;
        console.log('clone', clone);
      } catch (e) {
        console.log('转化失败', e);
        // @ts-ignore
        clone = new Blob([originFileObj], {
          type: originFileObj.type,
        }) as any as FileProps;
        clone.name = originFileObj.name;
        clone.lastModifiedDate = new Date();
        clone.lastModified = new Date().getTime();
      }
      return insertedFileObj(clone, insertObj);
    });
    let nextFileList = [...fileList, ...insertedFileInfoList];

    setFileList(nextFileList as FileProps[]);
  };

  /* 上传生命周期 */
  const mergeStart: RcUploadTypes['onStart'] = (file: FileProps) => {
    onStart?.(file);
  };

  const mergeBeforeUpload: RcUploadTypes['beforeUpload'] = async (
    file: FileProps,
    FileList: FileProps[],
  ) => {
    if (beforeUpload) {
      let result = await beforeUpload(file, FileList);
      if (result === false) {
        return result;
      }
    }
    const { size } = file;
    //@ts-ignore
    if (fileSize && size / 1024 > fileSize) {
      //@ts-ignore
      onFileSize?.(size / 1024);
      return false;
    }

    if (fileLimit && fileList.length >= fileLimit) {
      onFileLimit?.(fileList.length);
      return false;
    }
  };

  const mergeProgress: RcUploadTypes['onProgress'] = (
    event: UploadProgressEvent,
    file: FileProps,
  ) => {
    const insertObj = insertedFileObj(file, {
      percent: event.percent,
      status: 'pending',
    });
    let nextFileList = updateUploadList(insertObj as FileProps);
    setFileList(nextFileList);
    onProgress?.(event, file);
  };

  const mergeSuccess: RcUploadTypes['onSuccess'] = (
    response: Record<string, unknown>,
    file: FileProps,
    xhr: XMLHttpRequest,
  ) => {
    const insertObj = insertedFileObj(file, {
      percent: 100,
      status: 'success',
      xhr,
      response,
    });
    let nextFileList = updateUploadList(insertObj as FileProps);
    setFileList(nextFileList);
    onChange?.(file, nextFileList);
    onSuccess?.(response, file, xhr);
  };

  const mergeError: RcUploadTypes['onError'] = (
    error: Error,
    ret: Record<string, unknown>,
    file: FileProps,
  ) => {
    const insertObj = insertedFileObj(file, {
      status: 'error',
    });
    let nextFileList = updateUploadList(insertObj as FileProps);
    setFileList(nextFileList);
    onError?.(error, ret, file);
  };

  //rc-upload属性单独拎出来写
  const RcUploadProps = {
    ...(props as RcUploadTypes),
    prefixCls,
    onStart: mergeStart,
    beforeUpload: mergeBeforeUpload,
    onSuccess: mergeSuccess,
    onError: mergeError,
    onProgress: mergeProgress,
    onBatchStart,
  };

  const rcUpload = React.useRef(null);

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
  );
};

const Upload = React.forwardRef<unknown, UploadProps>(
  ForwardRefUpload,
) as React.ForwardRefExoticComponent<
  React.PropsWithChildren<UploadProps> & React.RefAttributes<any>
>;

Upload.defaultProps = {
  deleteIcon: <span>x</span>,
  type: 'select',
};

export default Upload;
