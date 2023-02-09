import React from 'react';
import Pagination from '..';
import '../style';

export default () => {
  const handleChangeSimple = (val: any) => {
    console.log('handleChangeSimple', val);
  };
  const handleChangeDefault = (val: any) => {
    console.log('handleChangeDefault', val);
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
      <Pagination
        total={31}
        showJumpInput
        showTotal
        showSizerSelect
        onChange={handleChangeDefault}
        style={{ margin: 10 }}
        // hidePagerNum={3}
        itemRender={{
          prevNode(current) {
            return <div className="pager-prev">上一个</div>;
          },
          nextNode(current) {
            return <div className="pager-next">下一个</div>;
          },
          totalNode(totalPage) {
            return <div className="pager-total">总数: {totalPage}</div>;
          },
          pagerNode(num) {
            return <div className="pager-pager">{num}</div>;
          },
        }}
      />
    </>
  );
};
