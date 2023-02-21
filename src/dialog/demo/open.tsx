import React from 'react';
import { open } from '..';
import Button from '../../button';
import '../style';
import './basic.less';


// const { ConfirmDialog } = Dialog

export default () => {
  const onOpen = () => {
    console.log('打开');
  };

  //TODO:实例模式下react的状态改变不会取通知实例

  const openDialgInstance = () => {
    let dialoger = open({
      content: '实例弹窗的内容',
      onOpen,
      title: '实例弹窗标题',
      closeByEsc: true,
      closeOnClickMask: true,
      NoScroll: true,
      footer: (
        <div className="demo-bottom">
          <Button
            style={{ marginRight: 10 }}
            type="success"
            onClick={() => {
              dialoger?.close();
            }}
          >
            cancel
          </Button>
          <Button
            onClick={() => {
              dialoger?.close();
            }}
          >
            confirm
          </Button>
        </div>
      ),
    });
  };

  return (
    <div className="dialog-example">
      <Button onClick={openDialgInstance}>打开实例弹窗</Button>
    </div>
  );
};
