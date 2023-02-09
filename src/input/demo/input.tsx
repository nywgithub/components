import React, { useEffect, useState } from 'react';
import { Input, InputNumber } from '..';
import ConfigProvider from '../../common-provider/context';
// import InputNumber from '../inputNumber'
import '../style';
// const { InputNumber } = Input
export default () => {
  const inputRef = React.createRef<any>();
  useEffect(() => {
    console.log(inputRef);
  }, []);
  const handleChange = (e: any, val: any) => {
    console.log(e, val);
    setValue(val);
  };
  const handleNumberChange = (val: any) => {
    console.log(val);
    setNumberValue(val);
  };
  const [value, setValue] = useState('');
  const [numberValue, setNumberValue] = useState(0);
  return (
    <>
      <Input
        onChange={handleChange}
        onPressEnter={() => {
          console.log('onPressEnter');
        }}
        onKeyDown={() => {
          console.log('onKeyDown');
        }}
        defaultValue={'默认值'}
        addonBefore={<span>前缀</span>}
        addonAfter={<span>后缀</span>}
        prefix={<span>prefix</span>}
        suffix={<span>suffix</span>}
        allowClear
        value={value}
      ></Input>
      <ConfigProvider locale={'test'}>
        <InputNumber
          ref={inputRef}
          min={0}
          max={10000000}
          addonBefore={<span>数量</span>}
          addonAfter={<span>个(单位)</span>}
          onChange={handleNumberChange}
          defaultValue={1}
          value={numberValue}
        />
      </ConfigProvider>
    </>
  );
};
