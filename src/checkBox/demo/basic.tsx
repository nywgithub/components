import React, { useState } from 'react';
import CheckBox from '..';
import '../style';

export default () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (e: any) => {
    console.log(e);
    setChecked(e.props.checked);
  };

  return (
    <>
      <div style={{ marginBottom: 10 }}>
        单选结果:
        <span style={{ marginLeft: 10 }}>{checked ? 'true' : 'false'}</span>
      </div>
      <div>
        <CheckBox onChange={handleChange} value={'苹果'} checked={checked}>
          苹果
        </CheckBox>
      </div>
    </>
  );
};
