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
import ConfigProvider from '../../common-provider/context'
import '../style';

export default () => {
    return (
        <ConfigProvider locale={'asd'}>
            <Alert kind="warning">这是一条警告提示?</Alert>
        </ConfigProvider>
    )
};
