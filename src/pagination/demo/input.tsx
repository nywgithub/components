import React from 'react';
import Pagination from '..';
import '../style';

export default () => {
  const handleChangeDefault = (val: any) => {
    console.log('handleChangeDefault', val);
  };

  return (
    <>
      <Pagination
        total={31}
        showTotal
        showSizerSelect
        showJumpInput
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
