import React, { useState } from 'react';
import CheckBox from '..';
import '../style';

export default () => {
  const [checked, setChecked] = useState(false);
  const [gruopValue, setGruopValue] = useState(['iphone', 'huawei']);

  const list = [1, 2];

  const handleChange = (e: any) => {
    console.log(e);
    setChecked(e.props.checked);
  };

  const handleGroupChange = (evt: any) => {
    console.log('evt', evt);
    const value = evt.props.value;
    const cloneValue = [...gruopValue];
    const index = cloneValue.indexOf(value);
    if (index !== -1) {
      cloneValue.splice(index, 1);
    } else {
      cloneValue.push(value);
    }
    console.log(cloneValue);
    setGruopValue(cloneValue);
  };

  return (
    <>
      单选结果:{checked ? 'true' : 'false'} 复选结果:
      {gruopValue.map((i) => i + ' ')}
      <div>
        <CheckBox onChange={handleChange} value={'苹果'} checked={checked}>
          苹果
        </CheckBox>
      </div>

      <div>
        <CheckBox.Group
          onChange={handleGroupChange}
          value={gruopValue}
          // disabled
        >
          <CheckBox value={'iphone'} disabled={false}>
            iphone
          </CheckBox>
          <CheckBox value={'xiaomi'}>xiaomi</CheckBox>
          <CheckBox value={'huawei'}>huawei</CheckBox>
        </CheckBox.Group>
      </div>
    </>
  );
};
