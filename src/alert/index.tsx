import React from 'react';
import t from 'prop-types';
import {ConfigConsumer, ConfigConsumerProps} from '../common-provider/context'
export interface AlertProps {
  /**
   * @description       Alert 的类型
   * @default           'info'
   */
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}

export type KindMap = Record<Required<AlertProps>['kind'], string>;

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <ConfigConsumer>
    {({ getPrefixCls, locale }: ConfigConsumerProps) => {
      const prefixCls = getPrefixCls('alert')
      console.log(locale)
      return (
        <div
          className={prefixCls}
          style={{
            background: kinds[kind],
          }}
          {...rest}
        >
          {locale && 'ok'}
          {children}
        </div>
      )
    }}
  </ConfigConsumer>
);

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;
