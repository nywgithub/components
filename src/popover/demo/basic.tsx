import React, { useRef, useState } from 'react';
import PopOver from '..';
import Button from '../../button';
import Input from '../../input';
import '../style';
import './index.less';

export default () => {
  const handelClose = () => {
    console.log('close');
  };

  const triggerEvent = {
    onClick() {
      console.log('click');
    },
  };

  const [visible, setVisible] = useState(false);

  const onVisibleChange = (val: boolean) => {
    console.log('visible', val);
  };

  const popRef: any = useRef(null);

  const closePop = () => {
    popRef.current?.close();
  };

  return (
    <>
      <PopOver
        ref={popRef}
        target={<Button>点击触发</Button>}
        triggerEvent={triggerEvent}
        trigger="click"
        onClose={handelClose}
        visible={visible}
        onVisibleChange={onVisibleChange}
      >
        <div className="main">
          这里是弹出层内容 <span onClick={closePop}>x</span>
        </div>
      </PopOver>
      <PopOver
        ref={popRef}
        target={<Button>悬浮触发</Button>}
        triggerEvent={triggerEvent}
        trigger="hover"
        onClose={handelClose}
        visible={visible}
        onVisibleChange={onVisibleChange}
      >
        <div className="main">
          这里是弹出层内容 <span onClick={closePop}>x</span>
        </div>
      </PopOver>
      <PopOver
        ref={popRef}
        target={<Input placeholder="聚焦触发" />}
        triggerEvent={triggerEvent}
        trigger="focus"
        onClose={handelClose}
        visible={visible}
        onVisibleChange={onVisibleChange}
      >
        <div className="main">
          这里是弹出层内容 <span onClick={closePop}>x</span>
        </div>
      </PopOver>
    </>
  );
};
