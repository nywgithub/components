import classNames from 'classnames';
import t from 'prop-types';
import React, { useEffect, useState } from 'react';
import { ConfigConsumer, ConfigConsumerProps } from '../common-provider/context';
import './style';
type ValueType = string | number;
export interface AlertProps {
  /**
   * @description       Alert 的类型
   * @default           'info'
   */
  kind?: 'info' | 'success' | 'error' | 'warning';
  /**
   * @description       自动消失的时间间距，单位毫秒，默认空
   * @default           ''
   */
  duration?: ValueType;
  /**
   * @description       关闭按钮的回调
   * @default           null
   */
  onClose?: () => void;
  /**
   * @description       关闭按钮
   * @default           x
   */
  close?: React.ReactNode;
  /**
   * @description       是否展示关闭按钮
   * @default           null
   */
  closeable?: boolean;
}

export type KindMap = Record<Required<AlertProps>['kind'], string>;

const kinds: KindMap = {
  info: '#5352ED',
  success: '#2ED573',
  error: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...props }) => {
  const { duration, close, onClose, closeable } = props;
  const [timer, setTimer] = useState(null);
  const [show, setShow] = useState<boolean>(true);
  useEffect(() => {
    if (!duration) return;
    startTimer();
    return () => {
      timer && clearTimeout(timer);
    };
  }, []);
  const closeFn = () => {
    setShow(false);
    onClose && onClose();
  };

  const startTimer = () => {
    let timeout = parseInt(duration as string) || 0;
    setTimer(
      //@ts-ignore
      window.setTimeout(() => {
        closeFn();
      }, timeout),
    );
  };

  return show ? (
    <ConfigConsumer>
      {({ getPrefixCls }: ConfigConsumerProps) => {
        const prefixCls = getPrefixCls('alert');
        return (
          <div
            className={classNames(prefixCls, {
              [`${prefixCls}-mask`]: duration ? true : false,
            })}
            style={{
              background: kinds[kind],
            }}
          >
            <div className={`${prefixCls}-content`}>{children}</div>
            <div className={`${prefixCls}-close`}>
              {closeable
                ? React.cloneElement(close as any, {
                    onClick: closeFn,
                  })
                : null}
            </div>
          </div>
        );
      }}
    </ConfigConsumer>
  ) : null;
};

Alert.propTypes = {
  kind: t.oneOf(['info', 'success', 'error', 'warning']),
};
Alert.defaultProps = {
  close: <span>x</span>,
  duration: '',
  closeable: false,
};
export default Alert;
