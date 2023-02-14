import RcRate from 'rc-rate';
import React from 'react';
import { ConfigContext } from '../common-provider/context';
import { RateProps } from './interface';
const Rate: React.FC<RateProps> = ({ prefixCls: customizePrefixCls, ...props }) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('rate', customizePrefixCls);

  return <RcRate prefixCls={prefixCls} {...props} />;
};

Rate.defaultProps = {
  count: 5,
  defaultValue: 5,
};

export default Rate;
