/*
 * @Author: niyongwei
 * @Date: 2022-04-07 10:32:36
 * @LastEditors: niyongwei
 * @LastEditTime: 2022-04-07 10:48:31
 * @FilePath: \git-work\components\src\alert\demo\basic.tsx
 * @Description:
 *
 * Copyright (c) 2022 by nyw, All Rights Reserved.
 */
import React from 'react';
import Alert from '..';
import ConfigProvider from '../../common-provider/context';
import { CloseIcon } from '../../icon';
import '../style';
import './index.less';

export default () => {
  const onClose = () => {
    console.log('关闭中');
  };
  return (
    <ConfigProvider locale={'asd'}>
      <Alert
        kind="warning"
        closeable
        close={
          <span>
            <CloseIcon />
          </span>
        }
        // duration={3000}
        onClose={onClose}
      >
        <div>这是一条警告提示！</div>
      </Alert>
      <Alert
        kind="info"
        closeable
        close={
          <span>
            <CloseIcon />
          </span>
        }
        // duration={3000}
        onClose={onClose}
      >
        <div>这是一条信息提示</div>
      </Alert>
      <Alert
        kind="success"
        closeable
        close={
          <span>
            <CloseIcon />
          </span>
        }
        // duration={3000}
        onClose={onClose}
      >
        <div>这是一条成功提示</div>
      </Alert>
      <Alert
        kind="error"
        closeable
        close={
          <span>
            <CloseIcon />
          </span>
        }
        // duration={3000}
        onClose={onClose}
      >
        <div>这是一条失败提示</div>
      </Alert>
    </ConfigProvider>
  );
};
