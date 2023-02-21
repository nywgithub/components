import React, { useState } from 'react';
import CheckBox, { CheckGroup } from '..';
import '../style';

export default () => {
  const [gruopValue, setGruopValue] = useState(['']);
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
      <div style={{ marginBottom: 10 }}>
        复选结果:
        <span style={{ marginLeft: 10 }}>{gruopValue.map((i) => i + ' ')}</span>
      </div>
      <div>
        <CheckGroup
          onChange={handleGroupChange}
          value={gruopValue}
          // disabled
        >
          <CheckBox value={'iphone'}>iphone</CheckBox>
          <CheckBox value={'xiaomi'}>xiaomi</CheckBox>
          <CheckBox value={'huawei'}>huawei</CheckBox>
        </CheckGroup>
      </div>
    </>
  );
};
