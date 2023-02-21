import React, { useEffect, useState } from 'react';
import { InputNumber } from '..';
import ConfigProvider from '../../common-provider/context';
// import InputNumber from '../inputNumber'
import '../style';
import './index.less';
// const { InputNumber } = Input
export default () => {
  const inputRef = React.createRef<any>();
  useEffect(() => {
    console.log(inputRef);
  }, []);
  const handleNumberChange = (val: any) => {
    console.log(val);
    setNumberValue(val);
  };
  const [numberValue, setNumberValue] = useState(0);
  return (
    <>
      <ConfigProvider locale={'test'}>
        <InputNumber
          ref={inputRef}
          min={0}
          max={10000000}
          addonBefore={<span style={{ marginRight: 10 }}>数量:</span>}
          addonAfter={<span style={{ marginLeft: 10 }}>个(单位)</span>}
          onChange={handleNumberChange}
          defaultValue={1}
          value={numberValue}
        />
      </ConfigProvider>
    </>
  );
};
