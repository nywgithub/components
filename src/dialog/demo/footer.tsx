import React, { useState } from 'react';
import Dialog from '..';
import Button from '../../button';
import '../style';
import './basic.less';

// const { ConfirmDialog } = Dialog

export default () => {
  const [visible, setVisible] = useState(false);
  const openDialg = () => {
    setVisible(true);
  };

  const onOpen = () => {
    console.log('打开');
  };

  const onClose = () => {
    setVisible(false);
    console.log('关闭');
  };

  return (
    <div className="dialog-example">
      <Button type="primary" onClick={openDialg}>
        带底部按钮弹窗
      </Button>

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
    </div>
  );
};
