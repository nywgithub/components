import React, { useEffect, useState } from 'react';
import Input from '..';
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

  const [value, setValue] = useState('');
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
    </>
  );
};
