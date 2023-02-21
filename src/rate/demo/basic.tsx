import 'rc-rate/assets/index.css';
import React, { useState } from 'react';
import Rate from '..';
import '../style';
import './basic.less';

export default () => {
  /* const list = ['Responsiveness', 'Customer Service', 'Items As Described', 'Delivery Time'];
  const handleClickSpecial = () => {};
  const [defaultValue, setDefaultValue] = useState([0, 0, 1, 1]); */
  return (
    <>
      <Rate />
      {/* {list.map((item, index) => (
        <div key={index} className="finger-wrap">
          <span>{item}</span>
          <FingerRate
            defaultValue={defaultValue[index]}
            onClick={handleClickSpecial}
            character={[
              <span className="ob-icon icon-thumb-up-review">+</span>,
              <span className="ob-icon icon-thumb-down-review">-</span>,
            ]}
          ></FingerRate>
        </div>
      ))}
      <div className="finger-wrap special" style={{ marginTop: 10 }}>
        <span>SPECIAL</span>
        <FingerRate
          defaultValue={0}
          character={[
            <span className="ob-icon icon-thumb-up-review">yes</span>,
            <span className="ob-icon icon-thumb-down-review">no</span>,
            <span className="ob-icon icon-thumb-down-review">any</span>,
          ]}
          onClick={handleClickSpecial}
        ></FingerRate>
      </div> */}
    </>
  );
};
