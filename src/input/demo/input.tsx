import React,{ useEffect,useState } from 'react';
import Input,{ InputNumber } from '..';
import ConfigProvider from '../../common-provider/context';
import { SuccessIcon } from '../../icon';
// import InputNumber from '../inputNumber'
import '../style';
import './index.less';
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
        defaultValue={'github.com/nywgithub/components'}
        addonBefore={<span>https://</span>}
        addonAfter={<span>.com</span>}
        prefix={<SuccessIcon />}
        allowClear
        value={value}
      ></Input>
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
