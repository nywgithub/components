import React, { useState } from 'react';
import Dialog, { alert, ConfirmDialog, open } from '..';
import Button from '../../button';
import '../style';
import './basic.less';

// const { ConfirmDialog } = Dialog

export default () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const openDialg = () => {
    setVisible(true);
  };

  const openConfirmDialg = () => {
    setVisible2(true);
  };

  const onOpen = () => {
    console.log('打开');
  };

  const onClose = () => {
    setVisible(false);
    console.log('关闭');
  };

  const onClose2 = () => {
    setVisible2(false);
    console.log('关闭');
  };

  function onConfirm() {
    onClose2();
  }
  function onCancel() {
    console.log('取消');
  }

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

  const openDialgInstanceSuccess = () => {
    alert.success({
      onOpen,
      title: false,
      closeByEsc: true,
      closeOnClickMask: true,
      NoScroll: true,
      footer: false,
    });
  };

  return (
    <div className='dialog-example'>
      <div id="test"></div>

      <Button onClick={openDialg}>打开弹窗</Button>

      <Button onClick={openConfirmDialg}>打开confirm弹窗</Button>

      <Button onClick={openDialgInstance}>打开实例弹窗</Button>

      <Button onClick={openDialgInstanceSuccess}>success</Button>

      <Dialog
        visible={visible}
        onOpen={onOpen}
        onClose={onClose}
        title="标题"
        closeByEsc
        closeOnClickMask
        NoScroll
        footer={
          <div className="demo-bottom">
            <Button style={{ marginRight: 10 }} onClick={onClose}>
              cancel
            </Button>
            <Button onClick={onClose}>confirm</Button>
          </div>
        }
      >
        弹窗内容
      </Dialog>
      <ConfirmDialog
        visible={visible2}
        onOpen={onOpen}
        onClose={onClose2}
        confirmContent={'确认'}
        confirm={onConfirm}
        cancel={onCancel}
        cancelContent={'取消'}
        title="标题"
        closeByEsc
        closeOnClickMask
        NoScroll
      >
        confrim弹窗内容
      </ConfirmDialog>
    </div>
  );
};
