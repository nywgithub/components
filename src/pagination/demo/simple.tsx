import React from 'react';
import Pagination from '..';
import '../style';

export default () => {
  const handleChangeSimple = (val: any) => {
    console.log('handleChangeSimple', val);
  };

  const handleJumpChange = (val: any) => {
    console.log('handleJumpChange', val);
  };

  return (
    <>
      <Pagination
        type="simple"
        total={35}
        showJumpInput
        onChange={handleChangeSimple}
        onJumpChange={handleJumpChange}
        style={{ margin: 10 }}
      />
    </>
  );
};
