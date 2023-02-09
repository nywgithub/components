import React, { useRef, useState } from 'react';
import PopOver from '..';
import '../style';

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
        target={<button>点击</button>}
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
    </>
  );
};
