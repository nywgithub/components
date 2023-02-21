import React, { useState } from 'react';
import { ConfirmDialog } from '..';
import Button from '../../button';
import '../style';
import './basic.less';

// const { ConfirmDialog } = Dialog

export default () => {
  const [visible2, setVisible2] = useState(false);
  const openConfirmDialg = () => {
    setVisible2(true);
  };

  const onOpen = () => {
    console.log('打开');
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

  return (
    <div className="dialog-example">
      <Button type='info' onClick={openConfirmDialg}>confirm弹窗</Button>

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
