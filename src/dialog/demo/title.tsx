import React,{ useState } from 'react';
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
      <div id="test"></div>

      <Button type="primary" onClick={openDialg}>
        自定义标题弹窗
      </Button>

      <Dialog
        visible={visible}
        onOpen={onOpen}
        onClose={onClose}
        title="自定义标题"
        closeByEsc
        closeOnClickMask
        NoScroll
      >
        弹窗内容
      </Dialog>
    </div>
  );
};
