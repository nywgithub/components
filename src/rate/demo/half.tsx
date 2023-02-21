import 'rc-rate/assets/index.css';
import React from 'react';
import Rate from '..';
import '../style';
import './basic.less';

export default () => {
  return <Rate allowHalf defaultValue={3.5} />;
};
